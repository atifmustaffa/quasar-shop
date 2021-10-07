const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: "/shop" },
      { path: "/shop", component: () => import("src/pages/Shop.vue") },
      { path: "/cart", component: () => import("src/pages/Cart.vue") },
      { path: "/help", component: () => import("src/pages/Help.vue") },
      {
        path: "/product/:id",
        component: () => import("src/pages/Product.vue"),
        props: true
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
