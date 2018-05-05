import VueRouter from 'vue-router';
import Vue from 'vue';

import Locale from './components/Locale';
import ProductList from './components/ProductList';
import Member from './components/Member';
import TicTacToe from './components/TicTacToe';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/:locale',
      component: Locale,
      children: [
        {
          path: 'products/:page?',
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
          path: 'member',
          component: Member,
        },
        {
          path: 'game',
          component: TicTacToe,
        },
      ],
    },
  ],
});
