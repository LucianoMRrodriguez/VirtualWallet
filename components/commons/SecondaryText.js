import React, { Component } from 'react'

import {
  Text,
  StyleSheet,
} from 'react-native'

export default SecondaryText = (props) => {
  return (
    <Text style={[styles.text, props.style]}>
      {props.text}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
  }
})