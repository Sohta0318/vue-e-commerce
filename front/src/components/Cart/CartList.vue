<template>
  <div class="cartDetail">
    <h1>Cart</h1>
    <h2>Total {{ total }}</h2>
  </div>
  <div class="container">
    <h2 v-if="checkCart">Nothing in your Cart</h2>
    <label v-for="item in allItem" :key="item.id">
      <input type="radio" :value="JSON.stringify(item)" class="item-input" />
      <div class="item-list">
        <img :src="item.image" :alt="item.title" />
        <p>
          {{ item.title }}
        </p>
        <span>{{ item.price }}</span>
        <p>
          Item <span>{{ item.item }}</span>
        </p>
        <p @click="remove(item._id)">Remove from cart</p>
      </div>
    </label>
  </div>
  <h2 class="order" @click="order">Order</h2>
</template>

<script>
export default {
  props: ["allItem", "total"],
  computed: {
    checkCart() {
      return this.allItem.length === 0;
    },
  },
  methods: {
    order() {
      this.$store.dispatch("items/addToOrder");
      this.$store.dispatch("items/fetchOrders");
    },
    async remove(id) {
      try {
        await this.$store.dispatch("items/removeItem", id);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.item-list {
  justify-content: space-between;
}
.item-input {
  display: none;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
img {
  width: 30em;
}
.order {
  margin-top: 5em;
  text-align: center;
}
.cartDetail {
  display: flex;
  justify-content: space-around;
}
</style>
