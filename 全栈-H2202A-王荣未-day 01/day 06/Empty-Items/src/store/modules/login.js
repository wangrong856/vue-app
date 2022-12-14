
import { getToken, setToken, removeToken } from "@/utils/auth/authToken";
import { login, getUserInfo, getUserImg } from "@/api/user";

const state = () => {
    return {
        token: getToken(),
        userInfo: {}
    }
}
const mutations = {
    x_setToken(state, t) {
        state.token = t
        setToken(t)
    },
    x_removeToken(state) {
        state.token = null
        removeToken()
    },
    x_setUserInfo(state, info) {
        state.userInfo = { ...info }
    },
    x_removeUserInfo(state) {
        state.userInfo = {}
    }
}
const actions = {
    async loginSync({ commit }, data) {
        const token = await login(data)
        commit("x_setToken", token)
    },
    async getUserSync({ commit }) {
        const result = await getUserInfo()
        const basicInfo = await getUserImg(result.userId)
        const resultBasicInfo = { ...result, ...basicInfo }
        commit("x_setUserInfo", resultBasicInfo)
        return resultBasicInfo
    },
    loginOut({commit}){
        commit("x_removeToken")
        commit("x_removeUserInfo")
    }
}





export default {
    namespaced: true,
    state,
    mutations,
    actions
}