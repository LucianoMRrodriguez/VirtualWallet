import ErrorResponse from '../model/ErrorResponse'

export default class QrMapper {

  static map(qrinfo) {
    try {
      let lengthIdCuenta = parseInt(qrinfo.substr(35, 1))
      let lengthNombre = parseInt(qrinfo.substr(108 + lengthIdCuenta, 2))
      let lengthLocalidad = parseInt(qrinfo.substr(112 + lengthIdCuenta + lengthNombre, 2))
      if(!lengthIdCuenta || !lengthNombre || !lengthLocalidad) {
        throw Error('No se pudo decodificar el qr correctamente')
      }
      return {
        qrinfo,
        PAYMENT_FORMAT: qrinfo.substr(0, 6),
        INITIAL_POINT: qrinfo.substr(6, 6),
        merchantInfo: qrinfo.substr(12, 24),
        lengthIdCuenta,
        idCuenta: qrinfo.substr(36, lengthIdCuenta),
        CUIL_ENCABEZADO: qrinfo.substr(36 + lengthIdCuenta, 8),
        cuit: qrinfo.substr(44 + lengthIdCuenta, 11),
        CBU_ENCABEZADO: qrinfo.substr(55 + lengthIdCuenta, 8),
        cbu: qrinfo.substr(63 + lengthIdCuenta, 22),
        MERCHANT_CATEGORY: qrinfo.substr(85 + lengthIdCuenta, 8),
        CURRENCY: qrinfo.substr(93 + lengthIdCuenta, 7),
        COUNTRY_CODE: qrinfo.substr(100 + lengthIdCuenta, 6),
        ID_EMVCO: qrinfo.substr(106 + lengthIdCuenta, 2),
        lengthNombre,
        nombre: qrinfo.substr(110 + lengthIdCuenta, lengthNombre),
        CIUDAD_COMERCIO: qrinfo.substr(110 + lengthIdCuenta + lengthNombre, 2),
        lengthLocalidad,
        localidad: qrinfo.substr(114 + lengthIdCuenta + lengthNombre, lengthLocalidad),
        CHECKSUM_ID: qrinfo.substr(114 + lengthIdCuenta + lengthNombre + lengthLocalidad, 4),
        crc16: qrinfo.substr(118 + lengthIdCuenta + lengthNombre + lengthLocalidad),
      }
    } catch (error) {
      console.log(error)
      throw new ErrorResponse(1234, 'Error al leer el código QR, asegurate que estes escaneando un QR de TODOPAGO y no cualquier verdura')
    }
  }
}