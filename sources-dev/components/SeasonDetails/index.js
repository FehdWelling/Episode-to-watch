import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Text, View, Image, StatusBar, TouchableOpacity, FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { getSerieById } from '../../actions/index';
import styles, {MIN_HEIGHT, MAX_HEIGHT} from './styles';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import Moment from 'moment';

class SeasonDetails extends React.Component {

    constructor() {
        super();
        this.state = { showNavTitle: false };
    }

    componentWillMount(){
        const { params } = this.props.navigation.state;
        const idSerie = params ? params.idSerie : null;
        
        this.props.getSerieById(idSerie)
    }

    renderSeasons(seasons){
        //const { serie } = this.props.serie
        //////////// /!\ CHANTIER /!\ et flatlist
        return(
            <TouchableOpacity style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: 'https://image.tmdb.org/t/p/original/' + season.backdrop_path }} style={styles.imageSeason} />
                        <Text style={styles.sectionContent}>{season.air_date}</Text>
                        <Text style={styles.sectionContent}>{season.episode_count}</Text>
                        <Text style={styles.sectionContent}>{season.name}</Text>
                    </View>
            </TouchableOpacity>
        )
    }

    render() {
        const { serie } = this.props.serie
        let firstDate = Moment(serie.first_air_date).format('YYYY')

        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" />
                <HeaderImageScrollView
                    maxHeight={MAX_HEIGHT}
                    minHeight={MIN_HEIGHT}
                    maxOverlayOpacity={0.6}
                    minOverlayOpacity={0.3}
                    fadeOutForeground={true}
                    renderHeader={() => <Image source={{ uri: 'https://image.tmdb.org/t/p/original/' + serie.backdrop_path}} style={styles.image} />}
                    renderFixedForeground={() => (
                        <Animatable.View
                            style={styles.navTitleView}
                            ref={navTitleView => {
                                this.navTitleView = navTitleView;
                            }}
                        >
                            <Text style={styles.navTitle}>{serie.name}</Text>
                        </Animatable.View>
                    )}
                >
                    <TriggeringView
                        style={styles.section}
                        onHide={() => this.navTitleView.fadeInUp(200)}
                        onDisplay={() => this.navTitleView.fadeOut(100)}
                    >
                        <Text style={styles.title}>
                            <Text style={styles.name}>{serie.name} , {firstDate}</Text>
                        </Text>
                    </TriggeringView>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Description</Text>
                        <Text style={styles.sectionContent}>{serie.overview}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Caractéristiques</Text>
                        <Text style={styles.sectionContent}>{serie.number_of_episodes}</Text>
                        <Text style={styles.sectionContent}>{serie.number_of_seasons}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Saisons</Text>
                        <FlatList
                            data={serie.seasons}
                            renderItem={({ season }) => this.renderSeasons(seasons)}
                            keyExtractor={season => season.id}
                            horizontal
                        />
                    </View>
                    {/* <View style={[styles.section, styles.sectionLarge]}>
                        <Text style={styles.sectionTitle}>Keywords</Text>
                        <View style={styles.keywords}>
                            <View style={styles.keywordContainer}>
                                <Text style={styles.keyword}>Mots-clé de la série</Text>
                            </View>
                        </View>
                    </View> */}
                </HeaderImageScrollView>
            </View>
        );
    }
}

function MapStateToProps(state){
    return {
        serie: state.serie
    }
}

function MapDispatchToProps(dispatch){
    return bindActionCreators({ getSerieById }, dispatch)
}

export default connect(MapStateToProps, MapDispatchToProps)(SeasonDetails);