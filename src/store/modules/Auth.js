import Api from '../../api/index'

const name = "AUTH";
const namespaced = true;

const state = {
  loading: false,
  isAuth: true,
  userId: null,
};
const getters = {
  STATE: (s) => s,
};
const mutations = {
  SET_USER: (state, data) => {
    state.isAuth = true
    state.userId = data.userId
  },
  REMOVE_USER: (state) => {
    state.isAuth = false
    state.userId = null
  },
};
const actions = {
  // returns message about registration of user
  SIGN_UP_USER: async ({ commit, dispatch }, { userName, userPassword, userEmail }) => {
    const response = Api.auth.registerUser({ userName, userPassword, userEmail })
    return response
  },

  // RETURNS TOKEN by passing email and password
  SIGN_IN_USER: async ({ commit, dispatch }, { userPassword, userEmail }) => {
    const response = await Api.auth.loginUser({ userPassword, userEmail })
    return response
  },

  // RETURNS USER_ID by passing jwt
  GET_USER_ID: async ({ dispatch }, { token }) => {
    const response = await Api.auth.getUserId(token)
    return response
  },

  // RETURNS INFO about user by passing id
  GET_USER_INFO: async ({ commit }, { UserId }) => {
    const response = await Api.auth.getUserInfo(UserId)
  },

  START_SESSION_WITH_REGISTER: async ({ dispatch }, { userName, userPassword, userEmail }) => {
    const response = await dispatch('Auth/SIGN_UP_USER', { userName, userPassword, userEmail })
    await dispatch('Auth/START_SESSION_WITH_LOGIN', { userEmail, userPassword })
  },

  // xD xD xD
  START_SESSION_WITH_LOGIN: async ({ commit, dispatch }, { userEmail, userPassword }) => {
    const token = await dispatch('Auth/SIGN_IN_USER', { userEmail, userPassword })
    const userId = await dispatch('Auth/GET_USER_ID', token)
    const user = await dispatch('Auth/GET_USER_INFO', userId)
    commit('SET_USER', user)
    localStorage.setItem('userId', userId)
    localStorage.setItem('token', token)
    return user
  },

  END_SESSION: ({ commit }) => {
    commit('REMOVE_USER')
    localStorage.clear()
  },
};
export default {
  name,
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
