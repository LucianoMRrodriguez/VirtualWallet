import React, { Component } from 'react'

import {
  Text,
  StyleSheet,
} from 'react-native'

export default Title = (props) => {
  return (
    <Text style={[styles.text, props.style]}>
      {props.text}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'GothamRounded',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    fontSize: 42,
    textAlign: 'center',
    color: '#e6007e',
  }
})