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
            {{ title }}
          </div>
          <div class="product-price text-h6">
            {{ $n(product.price || 0.0, "currency") }}
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
import axios from "axios";
import { join } from "path";

const BASE_API = "api";
const PRODUCTS_PATH = "products";

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
      if (!this.product.brand) {
        return "Product";
      }
      return this.product.brand + " " + this.product.name;
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
    getProduct(id) {
      let productApi = join(BASE_API, PRODUCTS_PATH, id);
      axios
        .get(productApi)
        .then(response => {
          if (response.status === 200) {
            this.product = response.data;

            // Reset carousel slide back
            this.resetSlide();
          }
        })
        .catch(err => {
          console.log("There's an error fetching product:", id, err);
        });
    }
  },
  mounted() {
    // Once loaded in DOM
    this.getProduct(this.id);
  },
  watch: {
    id(newVal, oldVal) {
      // Each time component is called with new id prop
      this.getProduct(newVal);
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
