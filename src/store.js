import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {

  },
  mutations: {
    addToCart(state, item) {
      state.cart = state.cart.concat(item);
    },
  },
  actions: {

  },
});
