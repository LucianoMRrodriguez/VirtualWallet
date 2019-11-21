import * as EP from './Endpoints'
import LoginMapper from '../mappers/LoginMapper'
import ErrorResponse from '../model/ErrorResponse';

import AsyncStorage from '@react-native-community/async-storage';

class LoginService {

  static async login(usuario, password) {
    //TODO: ver opciones de loggeo
    console.log('LoginService')
    console.log(`${usuario} esta intentando logearse con pass ${password}`)
    try {
      let response = await this._doLogin(usuario, password)
      let responseJson = await response.json()
      console.log(responseJson)
      return LoginMapper.map(responseJson)
    } catch (error) {
      throw (new ErrorResponse(
        error.code || 500,
        error.description || 'Error inesperado al intentar iniciar sesión'
      ))
    }
  }

  static async logout() {
    try {
      const sessionid = await AsyncStorage.getItem('sessionid');
      await fetch(`${EP.LOGOUT}?sessionId=${sessionid}`, {
        method: 'DELETE'
      })
      await AsyncStorage.removeItem('sessionid')
    } catch (error) {
      throw (new ErrorResponse(
        error.code || 500,
        error.description || 'Error inesperado al intentar cerrar sesión'
      ))
    }
  }

  static async _doLogin(usuario, password) {
    return await fetch(EP.OAUTH, {
      method: 'POST',
      headers: {
        //TODO: extraer token de autorizacion de esta clase hacia una variable de entorno
        'Authorization': 'Basic YWNtZTphY21lc2VjcmV0',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        grant_type: "password",
        scope: "openid",
        username: usuario,
        password: password,
        canal: "1"
      })
    })
  }
}

export default LoginService
