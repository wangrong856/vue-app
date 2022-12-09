import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/autoToken'
import router from "@/router"
const state = () => {
    return {
        token: getToken()
    }
}
const mutations = {
    setToken(state, token) {
        state.token = token
        setToken(token)
    }
}
const actions = {
    usersLogin(context, data) {
        return new Promise((resolve) => {
            login(data)
                .then((res) => {
                    if (res.success) {
                        router.push("/home")
                    }
                    resolve()
                }).catch(err => err)
        })
    }
}





export default {
    namespaced: true,
    state,
    mutations,
    actions
}