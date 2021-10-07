<template>
  <q-page padding class="page fit row inline justify-center">
    <q-card
      flat
      bordered
      class="my-card bg-grey-1"
      v-for="(product, index) in products"
      v-bind:key="product.id"
      v-bind="product"
    >
      <q-card-section>
        <q-carousel
          v-model="slides[index]"
          animated
          swipeable
          arrows
          navigation
          infinite
        >
          <q-carousel-slide
            v-for="(image, i) in product.images"
            v-bind:key="i"
            class="carousel-slide"
            :name="i"
            :img-src="image"
          />
        </q-carousel>
      </q-card-section>

      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-subtitle1">
              {{ product.brand }} {{ product.name }}
            </div>
            <div class="product-price text-subtitle1 text-weight-bold">
              {{ product.price }}
            </div>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="justify-evenly">
        <q-btn flat icon="share">Share</q-btn>
        <q-btn flat icon="add_shopping_cart">Add to cart</q-btn>
      </q-card-actions>
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
  computed: {
    title() {
      return "";
    }
  }
};
</script>

<style lang="scss">
.page {
  background-color: #ededed;
}
.my-card {
  margin: 0.5em;
  width: 100%;
}
.carousel-slide {
  background-repeat: no-repeat;
  background-size: contain;
}
.product-price {
  color: $primary;
}

@media screen and (min-width: 500px) {
  .my-card {
    max-width: 300px;
  }
}
</style>
