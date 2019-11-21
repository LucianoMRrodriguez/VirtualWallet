import * as EP from './Endpoints'

import AsyncStorage from '@react-native-community/async-storage'
import ErrorResponse from '../model/ErrorResponse'
import MovimientosMapper from '../mappers/MovimientosMapper'

class MovimientosService {

  static async getMovimientos() {
    try {
      let response = await this._doGetMovimientos();
      console.log(response)
      let responseJson = await response.json()
      console.log(responseJson)
      return MovimientosMapper.map(responseJson);
    } catch (error) {
      console.log(error)
      throw (new ErrorResponse(
        error.code || 500,
        error.description || 'Error inesperado al intentar obtener los movimientos'
      ))
    }
  }

  static async _doGetMovimientos() {
    const sessionid = await AsyncStorage.getItem('sessionid');
    return await fetch(EP.MOVIMIENTOS, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'sessionId': sessionid
      },
      body: JSON.stringify({
        canal: 1,
        canalTx: [],
        cantPorPag: 15,
        estado: [],
        fechaDesde: 1534906800000,
        fechaHasta: 1537326000000,
        idCuenta: 41703,
        medioDePago: [],
        motivosReclamo: [{ value: "RECLAMO_COMPRA", name: "No hice esta compra" }, { value: "RECLAMO_PRECIO", name: "El monto no es el mismo que pacté con el vendedor" }],
        ordenamiento: [{ campo: "FECHA", ordenamiento: "desc" }, { campo: "NROOP", ordenamiento: "desc" }],
        paginaActual: 1,
        palabra: "",
        tipoFiltro: null,
        tipoMovimiento: []
      })
    })
  }

}

export default MovimientosService