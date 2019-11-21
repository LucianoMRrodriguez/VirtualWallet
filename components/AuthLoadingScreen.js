import React, { Component } from 'react'

import {
    ActivityIndicator,
    StatusBar,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage';

import { SafeAreaView } from 'react-navigation';

export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const sessionid = await AsyncStorage.getItem('sessionid');
        console.log(sessionid)
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(sessionid ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <SafeAreaView>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </SafeAreaView>
        );
    }
}