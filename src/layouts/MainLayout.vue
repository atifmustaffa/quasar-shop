<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar Shop
        </q-toolbar-title>

        <Cart></Cart>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import Cart from "components/Cart.vue";

const linksData = [
  {
    title: "Shop",
    caption: "Browse items",
    icon: "shopping_bag",
    link: "/shop"
  },
  {
    title: "Cart",
    caption: "Manage items in cart",
    icon: "shopping_cart",
    link: "/cart",
    separator: true
  },
  {
    title: "Help",
    caption: "Services and information",
    icon: "help",
    link: "/help"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink, Cart },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>
