<template>
  <div id="content" @click="stopEvent">
    <p>You really want to Log Out?</p>
    <div class="textContainer">
      <p @click="logOut" class="yes">Yes</p>
      <p @click="onToggleModal" class="no">No</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["onToggleModal"],
  methods: {
    stopEvent() {
      event.stopPropagation();
    },
    logOut() {
      this.$store.dispatch("logOut");
      this.$router.replace("/auth");
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
  display: flex;
  justify-content: space-around;
}
.textContainer {
  display: flex;
}
.yes {
  margin-right: 5em;
  /* margin-left: -4em; */
}
a {
  text-decoration: none;
}
img {
  width: 20em;
}
p {
  font-size: 2em;
}
.partOfCart {
  text-align: center;
}
.yes,
.no {
  cursor: pointer;
}
</style>
