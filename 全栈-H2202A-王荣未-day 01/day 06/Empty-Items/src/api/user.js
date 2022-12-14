import axios from '@/utils/request'

// 登录接口
export function login(data) {
    return axios({
        url: "/sys/login",
        method: "POST",
        data
    })
}

// 用户信息接口
export function getUserInfo() {
    return axios({
        url: "/sys/profile",
        method: "POST",
    })
}

// 用户头像
export function getUserImg(id) {
    return axios({
        url:`sys/user/${id}`
    })
} 