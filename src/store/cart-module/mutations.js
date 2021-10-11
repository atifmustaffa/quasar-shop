export function updateCart(state, id) {
  // Add or increment item count
  let existingId = state.cart.findIndex(item => item.id === id);
  if (existingId < 0) {
    state.cart.push({ id, count: 1 });
  } else {
    state.cart[existingId].count++;
  }
}
export function resetCart(state) {
  state.cart = [];
}
