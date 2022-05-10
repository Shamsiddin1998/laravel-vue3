<template>
  <div class="container">
    <h2 class="text-center">Update Product</h2>
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
      <div class="col-md-12" v-if="product">
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
            <input type="text" class="form-control" v-model="product.price" />
          </div>
          <button
            :disabled="!isDisabled"
            type="button"
            class="btn btn-primary"
            @click.prevent="$store.dispatch('updateProduct', product)"
          >
            Update
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
    this.$store.dispatch("getProduct", this.$route.params.productId);
  },
  computed: {
    ...mapGetters({
      product: "product",
      isDisabled: "isDisabled",
    }),
  },
};
</script>