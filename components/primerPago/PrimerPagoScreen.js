import React, { Component } from 'react'

import SecondaryText from '../commons/SecondaryText'
import Title from '../commons/Title'

import {
    StyleSheet,
    View,
    Image,
} from 'react-native'
import PrimaryButton from '../commons/PrimaryButton';
import SecondaryButton from '../commons/SecondaryButton';
import LinkButton from '../commons/LinkButton';

export default class PrimerPago extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.marginbottom40} source={require('./img/app-icon.png')} />
                <View style={styles.marginbottom20}>
                    <SecondaryText
                        style={styles.marginbottom20}
                        text="Entendemos que estás queriendo pagar usando nuestro servicio..." />
                    <Title
                        style={styles.marginbottom20}
                        text="Vos querés..." />
                </View>
                <View style={{ alignSelf: 'stretch' }}>
                    <PrimaryButton
                        style={styles.marginbottom20}
                        title="Pagar algo ahora"
                        onPress={() => this.props.navigation.navigate('QrScanner')} />
                    <SecondaryButton
                        text="Crear mi cuenta" />
                    <LinkButton
                        text="Ya tengo cuenta" />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'center',
        textAlign: 'center',
    },
    marginbottom20: {
        marginBottom: 20
    },
    marginbottom40: {
        marginBottom: 40
    }
})