import Vue from 'vue'
import VueRouter from 'vue-router'
import PostComponent from './components/PostComponent';
import SinglePostComponent from './components/SinglePostComponent';

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/posts',
            component:PostComponent
        },
        {
            path:'/tags',
            component:SinglePostComponent
        },
    ]
})
