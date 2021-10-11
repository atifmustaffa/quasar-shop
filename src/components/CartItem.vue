<template>
  <div class="row q-mt-sm flex-center" v-if="valid">
    <div class="col-3">
      <q-img
        class="product-thumbnail"
        :src="product.images[0]"
        img-class="thumbnail-img"
        height="100px"
        max-width="100px"
      ></q-img>
    </div>
    <div class="col-8 q-px-sm">
      <div class="ellipsis-2-lines">{{ product.brand }} {{ product.name }}</div>
      <div class="product-price text-weight-bold">
        {{ $n(product.price || 0.0, "currency") }}
      </div>
    </div>
    <div class="col-1 text-center">{{ count }}</div>
  </div>
</template>

<script>
import api from "../helper/api";

export default {
  name: "CartItem",
  props: {
    id: {
      type: String
    },
    count: {
      type: Number
    }
  },
  data() {
    return {
      product: {}
    };
  },
  computed: {
    valid() {
      return Number(this.id) === this.product.id;
    }
  },
  mounted() {
    api
      .getProduct(this.id)
      .then(product => {
        this.product = product;
      })
      .catch(err => {
        console.log("There's an error fetching product:", id, err);
      });
  }
};
</script>
<style lang="scss"></style>
