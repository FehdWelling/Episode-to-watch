/**
 * Example AsyncStorage React Native
 * https://github.com/pradeep1991singh
 */

/*import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  AsyncStorage
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';

class AddSeason extends Component {

  constructor(props) {
    super(props);
    this.state = {
        myKey: null
    }
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      this.setState({myKey: value});
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }
  
  async saveKey(value) {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  async resetKey() {
    try {
      await AsyncStorage.removeItem('@MySuperStore:key');
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      this.setState({myKey: value});
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Demo AsyncStorage!
        </Text>

        <TextInput
          style={styles.formInput}
          placeholder="Enter key you want to save!"
          value={this.state.myKey}
          onChangeText={(value) => this.saveKey(value)}
          />

        <Button
          style={styles.formButton}
          onPress={this.getKey.bind(this)}
          title="Get Key"
          color="#2196f3"
          accessibilityLabel="Get Key"
        />

        <Button
          style={styles.formButton}
          onPress={this.resetKey.bind(this)}
          title="Reset"
          color="#f44336"
          accessibilityLabel="Reset"
        />

        <Text style={styles.instructions}>
          Stored key is = {this.state.myKey}
        </Text>


      </View>
    );
  }
}
export default connect()(AddSeason);

AppRegistry.registerComponent('AsyncStorageExample', () => AsyncStorageExample);*/