const name = "USER";
const namespaced = true;
/*  USER ENTITY
  userCart: []
  userEmail: "ake"
  userHistory: []
  userId: 3
  userName: "ake"
  userWishlist: []
*/

const state = {
  user: {
    // userCart: [],
    // userEmail: "ake",
    // userHistory: [],
    // userId: 3,
    // userName: "ake",
    // userWishlist: [],
    // isAuth: true,
  },
  isAuth: false,
};
const getters = {
  STATE: (s) => s.user,
  INFO: (s) => s.user
};
const mutations = {
  SET_USER: (state, data) => {
    state.user = data
    state.isAuth = true
  }
};
const actions = {
  SET_USER: async ({ commit, dispatch }, user) => {
    console.log(user)
    commit('SET_USER', user)
  }
};
export default {
  name,
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
