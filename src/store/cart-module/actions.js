export function addToCart(context, id) {
  context.commit("updateCart", id);
}
export function clearCart(context) {
  context.commit("resetCart");
}
