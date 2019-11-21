import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

export default SecondaryButton = (props) => {
    return (
        <TouchableOpacity
            style={[styles.button, props.style]}
            onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        borderRadius: 40,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
    },
    text: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
    }
})