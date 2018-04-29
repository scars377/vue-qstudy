import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

let initState;
try {
  initState = JSON.parse(localStorage.state);
} catch (err) {
  initState = {
    cart: [],
  };
}

export default new Vuex.Store({
  state: initState,

  getters: {

  },
  mutations: {
    addToCart(state, item) {
      state.cart = state.cart.concat(item);
      localStorage.state = JSON.stringify(state);
    },
  },
  actions: {

  },
});
