import ErrorResponse from '../model/ErrorResponse'

export default class MovimientosMapper {
  static map(response) {
    try {
      let movimientos = response.tableTxs
      return movimientos
    } catch (error) {
      throw (new ErrorResponse(response.status, response.mjeError || this.mapCode(responseStatus)))
    }
  }

  static mapCode(code) {
    if(code == 8012) {
      return "No se encontraron movimientos en las fechas seleccionadas"
    }
  }
}