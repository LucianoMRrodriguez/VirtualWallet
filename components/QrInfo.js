import React, { Component } from 'react'
import {
  Text,
  Button,
  ToastAndroid,
} from 'react-native'
import QrMapper from '../mappers/QrMapper'
import { SafeAreaView } from 'react-navigation';

export default class QrInfo extends Component {
  constructor(props) {
    super(props)
    let { navigation } = this.props
    try {
      this.state = QrMapper.map(navigation.getParam('data', 'No hay data'))
    } catch (error) {
      console.log(error)
      ToastAndroid.show(error.description, ToastAndroid.LONG)
    }
  }

  render() {
    if(this.state)
      return (
        <SafeAreaView>
          <Text selectable={true}>{JSON.stringify(this.state)}</Text>
          <Button
            title='Ok'
            onPress={() => { this.props.navigation.navigate('App') }}>
          </Button>
        </SafeAreaView>
      )
    else
      return (
        <SafeAreaView>
          <Text selectable={true}>Volve atras para escanear nuevamente</Text>
        </SafeAreaView>
      )
  }
}