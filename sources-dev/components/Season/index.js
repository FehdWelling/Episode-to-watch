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
    AsyncStorage
} from 'react-native';
import { fetchSeries } from '../../actions/index';
import styles from './styles';


class Season extends React.Component{

    constructor(props) {
        super(props)
        this.state = { value: "" }
    }

    see(){
        {console.log(this.props)}
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

                <Button
                    style={styles.formButton}
                    onPress={() => this.see()}
                    title="connexion"
                    color="#2196f3"
                    accessibilityLabel="connexion"
                />

                {this.props.series.series && !this.props.series.loading &&
                    < Text > { this.props.series.series.results.map((serie) => serie.name)} </Text>
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