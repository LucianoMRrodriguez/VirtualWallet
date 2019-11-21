import React, { Component } from 'react'
import {
  ActivityIndicator,
  StatusBar,
} from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation';


class QrScannerProxy extends Component {

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      console.log('Did focus')
      navigation.navigate('QrScanner')
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  render() {
    return (
      <SafeAreaView>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </SafeAreaView>
    )
  }
}

export default withNavigationFocus(QrScannerProxy)