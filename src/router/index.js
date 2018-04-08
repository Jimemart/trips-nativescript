import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Auth from '../views/Auth'
import Home from '../views/Home'

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/login',
      component: Auth,
      meta: {
        title: 'Auth',
      },
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {path: '*', redirect: '/login'},
  ],
});

router.replace('/login');

module.exports = router;
