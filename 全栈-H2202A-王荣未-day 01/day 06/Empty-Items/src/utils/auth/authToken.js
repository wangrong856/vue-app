const token = 'HR_TOKEN'

export function getToken(){
    return window.localStorage.getItem(token)
}

export function setToken(t){
    window.localStorage.setItem(token,t)
}

export function removeToken(){
    window.localStorage.removeItem(token)
}