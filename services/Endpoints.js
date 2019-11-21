export const HOST = "http://portal.integration.todopago.com.ar"

export const BASE_URL_PORTAL = HOST + "/app/api"
export const BASE_URL_MS = HOST + "/ms"

export const MOVIMIENTOS = BASE_URL_PORTAL + "/movs/getMovimientos"
export const OAUTH = BASE_URL_MS + "/oauth2/oauth/private/v1/token"

export const LOGOUT = HOST + "/api/destroySession"