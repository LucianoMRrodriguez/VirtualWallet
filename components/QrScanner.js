import React, { Component } from 'react'
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { withNavigationFocus } from 'react-navigation';

class QrScanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focusedScreen: true,
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('willFocus', () =>
      this.setState({ focusedScreen: true })
    );
    this.blurListener = navigation.addListener('willBlur', () =>
      this.setState({ focusedScreen: false })
    );
  }

  componentWillUnmount() {
    this.focusListener.remove()
    this.blurListener.remove()
  }

  render() {
    const { focusedScreen } = this.state;
    if (focusedScreen) {
      return (this.cameraView());
    } else {
      return <View />;
    }
  }

  cameraView = () => {
    return (
      <View style={{flex:1}}>
        <View style={styles.overlayTop}>
          <Text style={styles.texto}
            onPress={() => this.props.navigation.goBack()}>Volver</Text>
        </View>
        <QRCodeScanner
          onRead={this.onSuccess}
          cameraStyle={styles.cameraContainer}
          cameraProps={{ captureAudio: false }}
        />
        <View style={styles.overlayBot}>
          <Text style={styles.texto}>Enfocá el código QR de lo que deseas pagar</Text>
        </View>
      </View>
    );
  }
  onSuccess = (e) => {
    this.props.navigation.navigate('QrInfo', {
      data: e.data
    })
  }
}

const styles = StyleSheet.create({
  cameraContainer: {
    height: Dimensions.get('window').height,
  },
  overlayTop: {
    opacity: 0.5,
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    width: Dimensions.get("window").width,
    zIndex: 20
  },
  overlayBot: {
    opacity: 0.5,
    backgroundColor: 'black',
    width: Dimensions.get("window").width,
    zIndex: 20
  },
  texto: {
    color: 'white',
    padding: 20,
    opacity: 1,
  }
});

export default withNavigationFocus(QrScanner)