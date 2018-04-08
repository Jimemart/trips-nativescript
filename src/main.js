import Vue from 'nativescript-vue';

import router from './router';
import directives from './directives'
import store from './store';
import firebase from "nativescript-plugin-firebase"
import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))

Vue.config.silent = false;
setTimeout(() => {
  firebase.init({
    persist: true,
    url: 'https://vovanda-firebase.firebaseio.com/',
    storageBucket: 'gs://vovanda-firebase.appspot.com/',
    onAuthStateChanged: (data) => {
      if (data.loggedIn) {

      }
      else {
      }
    }
  }).then(
      function (instance) {
        // alert("firebase done");
      },
      function (error) {
        // alert("firebas error: " + error);
      }
  )
},2000)

new Vue({

  router,

  store,

}).$start();
