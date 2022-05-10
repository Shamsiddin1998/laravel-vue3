import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

let app = createApp(App);
app.use(router).use(VueAxios, axios).use(store).mount('#app');