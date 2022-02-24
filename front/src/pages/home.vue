<template>
  <transition name="home">
    <main class="home" v-if="show">
      <h1 class="home-title">Stay Healthy</h1>
      <!-- <router-link to="/items">Select your Items</router-link> -->
    </main>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    setTimeout(() => {
      this.$router.replace("/main");
    }, 5000);

    setTimeout(() => {
      this.show = true;
    }, 1000);
  },
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  background-image: url("../assets/images/images007.jpg");
  background-size: cover;
}
.home-title {
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: absolute;
  top: 5em;
  right: 25%;
  font-size: 3em;
}
h1 {
  position: relative;
  padding: 0.5em;
  background: #a6d3c8;
  color: white;
}

h1::before {
  position: absolute;
  content: "";
  top: 100%;
  left: 0;
  border: none;
  border-bottom: solid 15px transparent;
  border-right: solid 20px rgb(149, 158, 155);
}

.home-enter-from {
  opacity: 0;
}
.home-enter-active {
  transition: all 3s ease-out;
}
.home-enter-to {
  opacity: 1;
}
</style>
