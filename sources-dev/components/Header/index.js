import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import styles from './styles';


export default class Header extends React.Component {
    render(){
        return(
            <View style={styles.headerWrapper}>
                <Text style={styles.headerTitle}>{this.props.title}</Text>
                <Image source={require('../../images/search-icon.png')} style={styles.searchIcon} />
            </View>
        )
    }
}