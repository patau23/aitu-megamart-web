import Api from '../../api/index'

const name = "ADMIN";
const namespaced = true;
const state = {
  users: [],
  categories: [],
  products: [],
};
const getters = {
  STATE: (s) => s
};
const mutations = {};

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
