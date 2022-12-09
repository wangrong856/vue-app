import http from '@/utils/request'

export function login(data){
    return http({
        url:"/users/login",
        method:"POST",
        data
    })
}
export function register(data){
    return http({
        url:"/users/register",
        method:"POST",
        data
    })
}