import axios from 'axios';
import router from '../../router';
const state = {
    product: {
        id: null,
        name: null,
        description: null,
        price: null,
    },
    products: null
}

const getters = {
    product: (state) => state.product,
    products: (state) => state.products,
    isDisabled: (state) => {
        return state.product.name && state.product.description && state.product.price;
    },
}

const actions = {
    createProduct({ }, data) {
        axios.post("http://127.0.0.1:8000/api/products", data)
            .then((response) => {
                router.push({ name: "ProductIndex" });
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getProduct({ state, commit, dispatch }, id) {
        axios.get(`http://127.0.0.1:8000/api/products/${id}`)
            .then((response) => {
                commit('setProduct', response.data.data)
            });
    },
    getProducts({ commit }) {
        axios.get('http://127.0.0.1:8000/api/products')
            .then((response) => {
                commit('setProducts', response.data.data)
            });
    },
    deleteProduct({ dispatch }, id) {
        axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
            .then((response) => {
                dispatch('getProducts');
            });
    },
    updateProduct({ }, data) {
        axios.patch(
            `http://127.0.0.1:8000/api/products/${data.id}`,
            data
        ).then((response) => {
            router.push({ name: "ProductIndex" });
        });
    },
}

const mutations = {
    setProduct(state, product) {
        state.product = product;
    },
    setProducts(state, products) {
        state.products = products;
    }
}

export default {
    state, mutations, getters, actions
}