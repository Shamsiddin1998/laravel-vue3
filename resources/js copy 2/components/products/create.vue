<template>
  <div class="container">
    <h2 class="text-center">Create product</h2>
    <div class="row">
      <div class="col-md-12">
        <router-link
          :to="{ name: 'ProductIndex' }"
          class="btn btn-primary btn-sm float-right mb-2"
          >Back</router-link
        >
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="product.name" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              type="text"
              rows="5"
              class="form-control"
              v-model="product.description"
            ></textarea>
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control" v-model="product.price" />
          </div>
          <button
            :disabled="!isDisabled"
            type="button"
            class="btn btn-primary"
            @click.prevent="$store.dispatch('createProduct', product)"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.commit("setProduct", {
      id: null,
      name: null,
      description: null,
      price: null,
    });
  },
  computed: {
    ...mapGetters({
      product: "product",
      isDisabled: "isDisabled",
    }),
  },
};
</script>