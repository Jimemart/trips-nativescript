import Vue from 'nativescript-vue';

import router from './router';
import directives from './directives'
import store from './store';
import  firebase from 'nativescript-plugin-firebase'

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))

Vue.config.silent = false;
setTimeout(() => {
  firebase.init({
    persist: false,
    storageBucket: 'gs://vovanda-firebase.appspot.com/',
    onAuthStateChanged: (data) => {
      console.log(JSON.stringify(data))
      if (data.loggedIn) {
        alert('h')
      }
      else {
        alert('b')
      }
    }
  }).then(
      function (instance) {
        alert("firebase done");
      },
      function (error) {
        alert("firebas error: " + error);
      }
  )
},2000)

new Vue({

  router,

  store,

}).$start();
