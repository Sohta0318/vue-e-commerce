<template>
  <div id="content" @click="stopEvent">
    <h1>Cart Modal</h1>
    <div class="partOfCart" v-for="item in inCart" :key="item.id">
      <img :src="item.image" :alt="item.title" />
      <p>{{ item.title }}</p>
    </div>
    <button @click="toggleModal">close</button>
    <router-link to="/cart"><h2>Read More</h2></router-link>
  </div>
</template>

<script>
export default {
  props: ["toggleModal"],
  methods: {
    stopEvent() {
      event.stopPropagation();
    },
  },
  computed: {
    inCart() {
      const cart = this.$store.getters["items/cart"];
      return cart.slice(0, 3);
    },
  },
};
</script>

<style scoped>
#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}
a {
  text-decoration: none;
}
img {
  width: 20em;
}
.partOfCart {
  text-align: center;
}
</style>
