import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyAjalu9HkL3Bi1fjxmHSEnxTY76R4xdiTg",
    authDomain: "vue-mg67.firebaseapp.com",
    databaseURL: "https://vue-mg67.firebaseio.com",
    projectId: "vue-mg67",
    storageBucket: "vue-mg67.appspot.com",
    messagingSenderId: "471955779932",
    appId: "1:471955779932:web:439b8c165222a483541199",
    measurementId: "G-ZR5DQ15G0T"
})

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            vuetify,
            render: h => h(App)
        }).$mount('#app')
    }
})

