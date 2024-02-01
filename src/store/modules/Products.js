
const name = "PRODUCTS";
const namespaced = true;
/*
  _id: "6554dff70d473f892624934b"
  productCategoryID: 1
  productDescription: "Натуральное молоко, богатое кальцием и витаминами."
  productId: 1
  productImage: "https://utfs.io/f/c50c0998-936b-4dc2-931f-2ee79d158cc9-wwxj2q.5.jpg"
  productName: "Молоко Мое 2.5%"
  productPrice: 670
*/
const state = {
  all: []
};
const getters = {
  STATE: (s) => s,
  ALL: (s) => s.all
};
const mutations = {
  SET_ALL: (state, data) => {

  }
};
const actions = {
  GET_ALL_PRODUCTS: async ({ commit }) => {

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
