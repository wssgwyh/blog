
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import VueRouter from 'vue-router';
import store from './vuex/store.js';
import VueI18n from 'vue-i18n';

import routes from './routes.js';
import locales from './lang';

import App from './App.vue';

window.toastr = require('toastr/build/toastr.min.js');

window.toastr.options = {
    positionClass: "toast-bottom-right",
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};

Vue.use(VueI18n);
Vue.use(VueRouter);

Vue.config.lang = window.Language;

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

Vue.component(
    'vue-table-pagination',
    require('./components/dashboard/TablePagination.vue')
);

Vue.component(
    'vue-table',
    require('./components/dashboard/Table.vue')
);

Vue.component(
    'vue-form',
    require('./components/dashboard/Form.vue')
);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: routes
});

new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');
