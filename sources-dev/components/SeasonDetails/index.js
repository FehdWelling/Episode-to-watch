import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    FlatList,
    Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { getSerieById } from '../../actions/index';
import styles from './styles';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

class SeasonDetails extends React.Component {

    componentWillMount(){
        const { params } = this.props.navigation.state;
        const idSerie = params ? params.idSerie : null;
        
        this.props.getSerieById(idSerie)
    }

    renderSeasons(season){
        <TouchableOpacity key={key}>
            <Text>{season.name}</Text>
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + serie.poster_path }} />
            <Text>{season.episode_count}</Text>
            <Text>{season.air_date}</Text>
        </TouchableOpacity>
    }

    render() {
        const { serie } = this.props.serie
        return (
            <HeaderImageScrollView
            maxHeight={200}
            minHeight={50}
            headerImage={{ uri: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + serie.backdrop_path }}
            >
                <View style={{ height: 1000 }}>
                    <TriggeringView onHide={() => console.log('text hidden')} >
                    <Text>Scroll Me!</Text>
                    </TriggeringView>
                </View>
            </HeaderImageScrollView>
            /* <View style={styles.serie}>
                <Image source={{ uri: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + serie.backdrop_path }} style={styles.bgSerie} />
                <Text>
                    {this.props.serie.serie.name}
                </Text>
            </View> */
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