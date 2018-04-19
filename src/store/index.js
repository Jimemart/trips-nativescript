import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import auth from './auth'
import countries from './countries'
import useful from './useful'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    auth,
    countries,
    useful
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;
