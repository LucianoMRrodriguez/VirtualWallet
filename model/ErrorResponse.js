export default class ErrorResponse {
    constructor(code = 500, description = 'Ocurrió un error inesperado') {
        this.code = code
        this.description = description
    }
}