
import Login from './components/login/Login'
import ListaMovimientos from './components/ListaMovimientos'
import AuthLoadingScreen from './components/AuthLoadingScreen'
import QrScanner from './components/QrScanner'
import QrInfo from './components/QrInfo'
import QrScannerProxy from './components/QrScannerProxy'
import Profile from './components/Profile'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { useScreens } from 'react-native-screens';
import PrimerPagoScreen from './components/primerPago/PrimerPagoScreen';
useScreens();

const QrPaymentStack = createStackNavigator({ QrScanner: QrScanner, QrInfo: QrInfo }, {
  initialRouteName: 'QrScanner',
  backBehavior: 'history',
});

const PrimerPagoStack = createStackNavigator(
  { 
    PrimerPago: PrimerPagoScreen, 
    QrScanner: QrScanner
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  })
const AppStack = createBottomTabNavigator({ ListaMovimientos: ListaMovimientos, QrScannerProxy: QrScannerProxy, Profile: Profile });
const AuthStack = createStackNavigator({ Login: Login });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    PrimerPagoStack: PrimerPagoStack,
    App: AppStack,
    Auth: AuthStack,
    QrPayment: QrPaymentStack,
  },
  {
    initialRouteName: 'PrimerPagoStack',
  }
));
