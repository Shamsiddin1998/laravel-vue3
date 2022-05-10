<template>
  <div class="container">
    <h2 class="text-center">Products List</h2>
    <div class="row">
      <div class="col-md-12">
        <router-link
          :to="{ name: 'ProductCreate' }"
          class="btn btn-primary btn-sm float-right mb-2"
          >Add Product</router-link
        >
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, key) in products" :key="key">
              <td>{{ key + 1 }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.price }}</td>
              <td>
                <router-link
                  class="btn btn-success btn-sm"
                  :to="{
                    name: 'ProductEdit',
                    params: { productId: product.id },
                  }"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger btn-sm"
                  @click.prevent="$store.dispatch('deleteProduct', product.id)"
                >
                  Delete
                </button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>