const state = () => ({
    token: '',
    refreshToken: ''
})

const mutations = {
    setToken: (state, data) => {
        state.token = data
    },
    setRefreshToken: (state, data) => {
        state.refreshToken = data
    }
}

const getters = {
    getToken: (state) => () => state.token,
    getRefreshToken: (state) => () => state.refreshToken,
}

export default {
    namespaced: true, 
    state,
    mutations,
    getters
}