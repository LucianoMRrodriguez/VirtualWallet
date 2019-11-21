import React, { Component } from 'react'

import {
  Text,
  Button,
} from 'react-native'

import { SafeAreaView } from 'react-navigation';
import LoginService from '../services/LoginService'

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Perfil</Text>
        <Button
          title='Logout'
          onPress={this._handleOnPressLogout}></Button>
      </SafeAreaView>
    )
  }

  _handleOnPressLogout = async () => {
    try {
      await LoginService.logout()
    } catch (error) {
      console.log(error)
    }
    this.props.navigation.navigate('Auth')
  }
}