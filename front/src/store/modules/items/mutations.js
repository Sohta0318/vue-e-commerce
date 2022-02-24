export default {
  addToCart(state, payload) {
    state.cart = payload;
  },
  order(state, payload) {
    state.orderHistory = payload;
    state.cart = [];
  },
  removeItem(state, payload) {
    const resIndex = state.cart.findIndex((item) => item.id === payload.id);
    state.cart.splice(resIndex, 1);
  },
};
