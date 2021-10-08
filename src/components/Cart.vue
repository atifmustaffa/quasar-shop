<template>
  <div>
    <q-btn dense round flat icon="shopping_cart" to="/cart">
      <q-badge color="accent" floating transparent>
        {{ itemCount }}
      </q-badge>
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    itemCount() {
      return this.$store.getters["cartModule/getLength"];
    }
  }
};
</script>
