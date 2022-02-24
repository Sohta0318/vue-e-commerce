import axios from "axios";
export default {
  addToCart(context, payload) {
    context.commit("addToCart", payload);
  },
  async sendToBack(_, payload) {
    const product = {
      title: payload.title,
      price: payload.price,
      items: payload.items,
      image: payload.imageUrl,
    };
    const token = localStorage.getItem("token");
    try {
      await axios.post("/products", product, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  },
  async fetchProducts(context) {
    try {
      // const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const data = await axios(`/products`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = data.data;
      context.dispatch("addToCart", result);
    } catch (error) {
      console.log(error);
    }
  },
  async removeItem(context, payload) {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.delete(`/products/${payload}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(result);
      const id = result.data;
      context.commit("removeItem", id);
    } catch (error) {
      console.log(error);
    }
  },
  async addToOrder(context) {
    const token = localStorage.getItem("token");
    const cart = context.getters.cart;
    const cartObj = JSON.parse(JSON.stringify(cart));
    console.log(cartObj);
    try {
      await cartObj.map((item) => {
        const itemData = {
          title: item.title,
          price: item.price,
          items: item.items,
          image: item.image,
        };
        axios.post("/orders", itemData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      });
      await axios.delete("/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  },
  async fetchOrders(context) {
    const token = localStorage.getItem("token");
    try {
      const data = await axios.get("/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const orders = data.data;
      context.commit("order", orders);
    } catch (error) {
      console.log(error);
    }
  },
};
