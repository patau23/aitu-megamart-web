import Api from '../../api/index'

const name = "AUTH";
const namespaced = true;

// здесь нет стейта, толкьо экшены для запроса на авторизацию и other stuff
const state = {};
const getters = {};
const mutations = {};

const actions = {

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
    return response
  },

  START_SESSION_WITH_REGISTER: async ({ dispatch }, { userName, userPassword, userEmail }) => {
    const response = dispatch('SIGN_UP_USER', { userName, userPassword, userEmail })
    dispatch('START_SESSION_WITH_LOGIN', { userEmail, userPassword })
    return response;
  },

  // xD xD xD
  START_SESSION_WITH_LOGIN: async ({ commit, dispatch }, { userEmail, userPassword }) => {
    const token = dispatch('SIGN_IN_USER', { userEmail, userPassword })
    const userId = dispatch('GET_USER_ID', token)
    const user = dispatch('GET_USER_INFO', userId)
    dispatch('User/SET_USER', user, { root: true })
    localStorage.setItem('userId', userId)
    localStorage.setItem('token', token)
  },

  START_SESSION_WITH_USER_ID: async ({ commit, dispatch }, { userId }) => {
    const user = dispatch('GET_USER_INFO', userId)
    dispatch('User/SET_USER', user, { root: true })
    localStorage.setItem('userId', userId)
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
