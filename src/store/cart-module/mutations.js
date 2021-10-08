export function updateCart(state, id) {
  state.cart.push(id);
}
export function resetCart(state) {
  state.cart = [];
}
