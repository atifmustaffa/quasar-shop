<template>
  <div>
    <div>
      <q-carousel v-model="slide" animated swipeable arrows navigation infinite>
        <q-carousel-slide
          v-for="(image, i) in product.images"
          v-bind:key="i"
          class="carousel-slide"
          :name="i"
          :img-src="image"
        />
      </q-carousel>
    </div>

    <div class="q-pa-md">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6 ellipsis-4-lines">
            {{ product.brand }} {{ product.name }}
          </div>
          <div class="product-price text-h6">
            {{ product.price }}
          </div>
          <q-separator />
          <div class="product-description text-body1 q-my-sm">
            {{ product.description ? product.description : "description" }}
          </div>
        </div>
      </div>

      <div class="flex justify-evenly q-my-sm">
        <q-btn color="primary" icon="share">Share</q-btn>
        <q-btn color="primary" icon="add_shopping_cart">Add to cart</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import products from "../mock_products";

export default {
  name: "PageProduct",
  props: ["id"],
  data() {
    return {
      product: products.find(p => p.id === +this.id),
      slide: 0
    };
  },
  watch: {
    id: function(newVal, oldVal) {
      // Watch for id from route changes
      this.product = products.find(p => p.id === +newVal);
      this.slide = 0;
    }
  }
};
</script>
<style lang="scss">
.carousel-slide {
  background-size: contain;
  background-repeat: no-repeat;
}
.product-price {
  color: $primary;
}
</style>
