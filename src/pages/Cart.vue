<template>
  <div class="q-pa-md cart-items">
    <div class="row q-mb-sm text-weight-bold">
      <div class="col-11">Details</div>
      <div class="col-1 text-center">Qty</div>
    </div>

    <!-- CartItem -->
    <CartItem
      v-for="item in itemsCount"
      :key="item.id"
      v-bind="item"
    ></CartItem>
  </div>
</template>

<script>
import CartItem from "components/CartItem.vue";

export default {
  name: "PageCart",
  components: { CartItem },
  computed: {
    itemsCount() {
      return this.$store.getters["cartModule/getItems"];
    }
  }
};
</script>
<style lang="scss">
.cart-items {
  max-width: 600px;
  margin: auto;
}
</style>
