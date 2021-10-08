<template>
  <div class="row justify-center product-container">
    <!-- Image -->
    <div class="col-xs-12 col-sm-6 col-md-4">
      <q-carousel
        v-model="slide"
        animated
        swipeable
        arrows
        navigation
        infinite
        class="carousel-container"
      >
        <q-carousel-slide
          v-for="(image, i) in product.images"
          v-bind:key="i"
          class="carousel-slide"
          :name="i"
          :img-src="image"
        />
      </q-carousel>
    </div>

    <!-- Product details -->
    <div class="col-xs-12 col-sm-6 col-md-4 q-pa-md">
      <div class="text-h6 ellipsis-4-lines">
        {{ title }}
      </div>
      <div class="product-price text-h6 q-my-md">
        {{ $n(product.price || 0.0, "currency") }}
      </div>
      <q-separator />
      <div class="product-description text-body1 q-mt-md">
        <q-expansion-item
          default-opened
          header-class="expansion-header"
          label="Description"
        >
          <q-card>
            <q-card-section horizontal>
              {{ product.description ? product.description : "description" }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>

    <!-- Button groups -->
    <div class="col-xs-12 col-sm-12 col-md-4 q-pa-md">
      <div>
        <q-btn
          color="primary"
          label="Add to cart"
          icon="add_shopping_cart"
          style="width: 100%;"
          @click="addToCart(id)"
        />
      </div>
      <div class="q-mt-sm">
        <q-btn
          stretch
          color="primary"
          label="Share"
          icon="share"
          style="width: 100%;"
          @click="share"
        />
      </div>
    </div>
  </div>
</template>

<script>
import api from "../helper/api";

export default {
  name: "PageProduct",
  props: ["id"],
  data() {
    return {
      product: {},
      slide: 0
    };
  },
  computed: {
    title() {
      return `${this.product.brand || "Brand"} ${this.product.name ||
        "Product"}`;
    }
  },
  methods: {
    share() {},
    addToCart(id) {
      this.$store.dispatch("cartModule/addToCart", id);
    },
    resetSlide() {
      this.slide = 0;
    },
    setProduct(id) {
      api
        .getProduct(id)
        .then(product => {
          this.product = product;
        })
        .catch(err => {
          // Handles error or notify
          console.log("There's an error fetching product:", id, err);
        });
    }
  },
  mounted() {
    // Once loaded in DOM
    this.setProduct(this.id);
  },
  watch: {
    id(newVal, oldVal) {
      // Each time component is called with new id prop
      this.setProduct(newVal);
    }
  }
};
</script>
<style lang="scss">
.carousel-container {
  padding: 16px;
}
.carousel-slide {
  background-size: contain;
  background-repeat: no-repeat;
}
.product-price {
  color: $primary;
}
.expansion-header {
  padding: 0;
}
.footer {
  background-color: #fff;
}
.product-container {
  max-width: 1024px;
  margin: auto;
}
</style>
