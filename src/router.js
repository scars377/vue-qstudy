import VueRouter from 'vue-router';
import Vue from 'vue';

import Locale from './components/Locale';
import ProductList from './components/ProductList';
import Member from './components/Member';
import MemberRegister from './components/MemberRegister';
import MemberLogin from './components/MemberLogin';
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
          meta: {
            breadcrumb: 'products',
          },
        },
        // {
        //   path: '/products',
        //   redirect: '/products/1',
        // },
        {
          path: 'member',
          component: Member,
          meta: {
            breadcrumb: 'member',
          },
          children: [
            {
              path: '',
              component: MemberLogin,
              meta: {
                breadcrumb: 'login',
              },
            },
            {
              path: 'register',
              component: MemberRegister,
              meta: {
                breadcrumb: 'register',
              },
            },
          ],
        },
        {
          path: 'game',
          component: TicTacToe,
          meta: {
            breadcrumb: 'game',
          },
        },
      ],
    },
  ],
});
