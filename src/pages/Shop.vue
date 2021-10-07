<template>
  <q-page padding class="bg-grey-3 fit row inline justify-center">
    <q-card
      flat
      bordered
      v-ripple
      class="my-card q-ma-xs"
      v-for="product in products"
      v-bind:key="product.id"
      v-bind="product"
      @click="openProduct(product.id)"
    >
      <q-card-section class="thumbnail-container flex center">
        <q-img
          class="product-thumbnail"
          :src="product.images[0]"
          img-class="thumbnail-img"
        ></q-img>
      </q-card-section>

      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-subtitle2 ellipsis-2-lines">
              {{ product.brand }} {{ product.name }}
            </div>
            <div class="product-price text-subtitle1 text-weight-bold">
              {{ product.price }}
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script>
import products from "../mock_products";

export default {
  name: "PageShop",
  data() {
    return {
      products,
      slides: Array(products.length).fill(1)
    };
  },
  methods: {
    openProduct(id) {
      this.$router.push("/product/" + id);
    }
  }
};
</script>

<style lang="scss">
.my-card {
  width: 100%;
  max-width: 180px;
  cursor: pointer;
}
.thumbnail-container {
  height: 180px;
}
.product-price {
  color: $primary;
}
.thumbnail-img {
  /* Temporary */
  background-size: contain !important;
}
@media screen and (min-width: 500px) {
  .my-card {
    max-width: 200px;
  }
}
</style>
