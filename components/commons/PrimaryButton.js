import React, { Component } from 'react'

import {
    Button,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native'

export default PrimaryButton = (props) => {
    return (
        <TouchableOpacity
            style={[styles.button, props.style]}
            onPress={props.onPress}
        >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        borderRadius: 40,
        backgroundColor: '#e6007e',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
    }
})