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
    modalShow: false,
    modalProduct: {},
  },

  getters: {

  },
  mutations: {
    addToCart(state, item) {
      state.cart = state.cart.concat(item);
      // localStorage.state = JSON.stringify(state);
    },
    showModal(state, product) {
      state.modalShow = true;
      state.modalProduct = product;
    },
    closeModal(state) {
      state.modalShow = false;
    },
  },
  actions: {

  },
});
