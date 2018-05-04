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


class Season extends React.Component{

    constructor(props) {
        super(props)
        this.state = { value: "" }
    }

    renderSeries(item){
        return (
            <TouchableOpacity style={styles.serie} onPress={() => this.props.navigation.navigate('Details', {
                idSerie: item.id,
            })}>
                <Image source={{ uri: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + item.poster_path }}
                    style={[{ width: 100, height: 193}, styles.img]} />
                <Text style={styles.serieName}>{item.name}</Text>
                <Text style={styles.serieName}>{item.first_air_date}</Text>
                <Text style={styles.serieName}>{item.vote_average}</Text>
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