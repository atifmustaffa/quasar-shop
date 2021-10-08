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
            <q-expansion-item
              default-opened
              header-class="expansion-header"
              label="Description"
            >
              <q-card>
                <q-card-section horizontal>
                  {{
                    product.description ? product.description : "description"
                  }}
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </div>
      </div>

      <q-footer bordered class="footer">
        <q-btn-group spread>
          <q-btn
            class="q-py-xs"
            color="primary"
            label="Share"
            icon="share"
            @click="share"
          />
          <q-btn
            class="q-py-xs"
            color="primary"
            label="Add to cart"
            icon="add_shopping_cart"
            @click="addToCart(id)"
          />
        </q-btn-group>
      </q-footer>
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
  },
  methods: {
    share() {},
    addToCart(id) {
      this.$store.dispatch("cartModule/addToCart", id);
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
.expansion-header {
  padding: 0;
}
.footer {
  background-color: #fff;
}
</style>
