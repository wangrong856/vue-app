import axios from '@/utils/request'

export function login(data) {
    return axios({
        url: "/api/sys/login",
        method: "POST",
        data
    })
}