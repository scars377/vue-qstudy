import VueRouter from 'vue-router';
import Vue from 'vue';

import ProductList from './components/ProductList';
import Member from './components/Member';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/products/:page?',
      component: ProductList,
      props: {
        url: '/api/products',
        pagenition: true,
      },
    },
    // {
    //   path: '/products',
    //   redirect: '/products/1',
    // },
    {
      path: '/member',
      component: Member,
    },
  ],
});
