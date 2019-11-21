import React, { Component } from 'react'

import {
  View,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage';

import LoginService from '../../services/LoginService'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: '',
      password: '',
    }
  }
  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setState({ usuario: text })}
        ></TextInput>
        <TextInput
          onChangeText={(text) => this.setState({ password: text })}
          autoCompleteType='password'
          secureTextEntry={true}
        ></TextInput>
        <Button
          title='Login'
          onPress={this._handleOnPressLogin}></Button>
      </View>
    )
  }

  _handleOnPressLogin = async () => {
    try {
      let { sessionid } = await LoginService.login(this.state.usuario, this.state.password)
      await AsyncStorage.setItem('sessionid', sessionid)
      this.props.navigation.navigate('App');
    } catch (error) {
      console.log(error)
      ToastAndroid.show(error.description, ToastAndroid.LONG)
    }
  }
}

export default Login