import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductIndex from './components/products/index.vue';
import ProductCreate from './components/products/create.vue';
import ProductEdit from './components/products/edit.vue';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:
        [
            {
                path: '/products',
                component: ProductIndex,
                name: "ProductIndex"
            },
            {
                path: '/products/create',
                component: ProductCreate,
                name: "ProductCreate"
            },
            {
                path: '/products/edit/:productId',
                component: ProductEdit,
                name: "ProductEdit"
            }
        ]
}) 