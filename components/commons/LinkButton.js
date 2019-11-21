import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

export default LinkButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress}>
                <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    text: {
        color: '#E6007E',
        fontSize: 16,
        textAlign: 'center',
        padding: 15,
    }
})