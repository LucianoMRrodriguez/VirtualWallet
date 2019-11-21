import ErrorResponse from '../model/ErrorResponse'

export default class LoginMapper {
  static map(response) {
    try {
      let { sessionid } = response.AutenticarResponse
      console.log(sessionid)
      return { sessionid }
    } catch (error) {
      throw (new ErrorResponse(response.error, response.error_description))
    }
  }
}