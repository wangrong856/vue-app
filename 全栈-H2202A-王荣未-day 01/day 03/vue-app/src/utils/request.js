import axios from 'axios'
import { Message } from "element-ui"

const instent = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    // baseURL: "http://ihrm.itheima.net",
    timeout: 3000,
})

// 添加请求拦截器
instent.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instent.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const { success, message, data } = response.data
    if (success) {
        Message.success(message)
        return response.data
    } else {
        Message.error(message)
    }
}, function ({ response }) {
    const { data } = response
    if (data.code !== 10000 && data.code !== 200) {
        Message.error(data.message || '登录失败')
    }
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(data.message);
});

export default instent