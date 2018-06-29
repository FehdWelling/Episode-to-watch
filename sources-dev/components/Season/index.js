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
    Image,
    TouchableOpacity
} from 'react-native';
import { fetchSeries } from '../../actions/index';
import styles from './styles';
import { StackNavigator } from 'react-navigation';
import Header from '../Header/index';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


class Season extends React.Component{

    constructor(props) {
        super(props)
        this.state = { value: "" }
    }

    static navigationOptions = {
        headerTitle: <Header title="Accueil"/>,
    };


    renderSeries(item){
        const voteAverage = item.vote_average * 10

        return (
            <TouchableOpacity style={styles.serie} onPress={() => this.props.navigation.navigate('Details', {
                idSerie: item.id,
            })}>
                <Image source={{ uri: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + item.poster_path }}
                    style={[{ width: 97, height: 139}, styles.img]} />
                <View style={styles.infoSerie}>
                    <View style={styles.titleContainer}>
                        <AnimatedCircularProgress
                            size={30}
                            width={3}
                            fill={voteAverage}
                            tintColor="#00e0ff"
                            rotation={0} 
                            //backgroundColor="#3d5875"
                        >
                            {
                                (voteAverage) => (
                                    <Text style={styles.voteAverage}>{Math.round(voteAverage)} %</Text>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text style={styles.serieName}>{item.name}</Text> 
                    </View>
                    <Text numberOfLines={4} style={styles.description}>{item.overview}</Text>
                    <Text style={styles.airDate}>{item.first_air_date}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    LES AMIIIIIIIIIIIIIIIIIIS!
                </Text>

                <TextInput
                    style={styles.formInput}
                    placeholder="Ajouter une nouvelle série"
                    value={this.state.value}
                    onChangeText={(value) => this.setState({ value })}
                />
                

                <Button
                    style={styles.formButton}
                    onPress={() => this.props.fetchSeries(this.state.value)}
                    title="connexion"
                    color="#2196f3"
                    accessibilityLabel="connexion"
                />

                {this.props.series.series && !this.props.series.loading &&
                    <FlatList 
                        data={this.props.series.series.results}
                        renderItem={({ item }) => this.renderSeries(item)}
                        keyExtractor={item => item.name}
                    />
                }
            </View>
        );
    }
}

function mapStateTopProps(state) {
    return {
        series: state.series
    };
}

function mapDispatchTopProps(dispatch) {
    return bindActionCreators({ fetchSeries }, dispatch);
}

export default connect(mapStateTopProps, mapDispatchTopProps)(Season);