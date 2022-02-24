<template>
  <layout-all>
    <div class="body">
      <cart-list :allItem="cartList" :total="subTotal" />
    </div>
  </layout-all>
</template>

<script>
import CartList from "../components/Cart/CartList.vue";
export default {
  components: { CartList },
  data() {
    return {
      total: 0,
    };
  },
  computed: {
    cartList() {
      const cartData = this.$store.getters["items/cart"];
      const finalData = JSON.parse(JSON.stringify(cartData));
      return finalData;
    },
    subTotal() {
      this.cartList.map((list) => (this.total += list.price));
      return this.total;
    },
  },
};
</script>

<style></style>
