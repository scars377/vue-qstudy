import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

// let initState;
// try {
//   initState = JSON.parse(localStorage.state);
// } catch (err) {
//   initState = {
//     cart: [],
//     modalShow: false,
//   };
// }

export default new Vuex.Store({
  state: {
    cart: [],
    modal: null,
  },

  getters: {

  },
  mutations: {
    addToCart(state, item) {
      state.cart = state.cart.concat(item);
      // localStorage.state = JSON.stringify(state);
    },
    showModal(state, product) {
      state.modal = product;
    },
    closeModal(state) {
      state.modal = null;
    },
  },
  actions: {

  },
});
