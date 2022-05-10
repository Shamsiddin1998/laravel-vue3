import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './app.vue';
import router from './router';
import store from './store/index';

Vue.use(VueAxios, axios);

const app = new Vue({
    el: '#app',
    router:router,
    store:store,
    render: (h) => h(App)
});
