import React, { Component } from 'react'

import {
    View,
    Text
} from 'react-native'
class Movimiento extends Component {
    render() {
        let { 
            fecha: fechaTxFmt,
            mail: clienteEmailAddress,
            id: id,

         } = this.props.data

        return (
            <View>
                <Text>{id}</Text>
            </View>
        )
    }
}

export default Movimiento