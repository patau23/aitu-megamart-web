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
  user: undefined,
};
const getters = {
  STATE: (s) => s.user,
};
const mutations = {
SET_USER: (state, data) => {
  state.user = data
}
};
const actions = {
  
};
export default {
  name,
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
