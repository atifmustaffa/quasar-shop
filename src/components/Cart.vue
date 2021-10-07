<template>
  <div>
    <q-btn dense round flat icon="shopping_cart">
      <q-badge color="orange" floating transparent>
        {{ cart.length }}
      </q-badge>
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    cart: {
      type: Array,
      required: true
    }
  }
};
</script>
