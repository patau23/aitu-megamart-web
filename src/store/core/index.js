import { createStore } from "vuex";
import Auth from '../modules/Auth'
import Cart from "../modules/Cart";
import Categories from "../modules/Categories";
import Products from "../modules/Products";
import User from "../modules/User";
import Wishlist from "../modules/Wishlist";

export default createStore({
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Cart,
    Categories,
    Products,
    User,
    Wishlist
  }
})