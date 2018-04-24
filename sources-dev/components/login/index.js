import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSerie } from '../../actions/index';
import styles from './styles'


class Login extends Component {

    constructor(props){
        super(props)
        this.state = { value : "turluberlu" }
        this.see = this.see.bind(this)
    }
    
    /* logged() {
        this.props.login();
        const isConnected = this.props.isLogged == true ? "Connecté" : "Deconnecté"
        this.save(isConnected)
    } */
    see(){
        {console.log(this.props)}
    }
    /* async save(value){
        try {
            await AsyncStorage.setItem('@MySuperStore:key', value);
        } catch(error) {
            console.log(error)
        }
    } */
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Demo AsyncStorage!
                </Text>

                <TextInput
                    style={styles.formInput}
                    placeholder="Ajouter une nouvelle série"
                    value={this.state.value}
                    onChangeText={(value) => this.setState({value})}
                />

                <Button
                    style={styles.formButton}
                    onPress={()=> this.props.addSerie(this.state.value)}
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

                <Text style={styles.instructions}>
                    Stored key is =
                </Text>
            </View>
        );
    }
}

function mapStateTopProps(state) {
    return {
        data: state.data
    };
}

function mapDispatchTopProps(dispatch) {
    return bindActionCreators({ addSerie }, dispatch);
}

export default connect(mapStateTopProps, mapDispatchTopProps)(Login);

/* AppRegistry.registerComponent('AsyncStorageExample', () => AsyncStorageExample); */