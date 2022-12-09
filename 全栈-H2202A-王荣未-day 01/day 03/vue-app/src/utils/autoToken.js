const ElToken = "token"

export function getToken() {
    return localStorage.getItem(ElToken)
}
export function setToken(token) {
    return localStorage.setItem(ElToken,token)
}
export function removeToken() {
    return localStorage.removeItem(ElToken)
}