<template>
  <header :class="shrink" @click="scroll">
    <!-- <img src="../../assets/images/search.svg" alt="search" /> -->
    <div class="wrap">
      <router-link to="/"><h1>Header</h1></router-link>
      <nav class="menu">
        <router-link to="/main">Home</router-link>
        <router-link to="/items">All Items</router-link>
        <router-link to="/user/:id">My page</router-link>
        <router-link to="/cart">Cart</router-link>
        <router-link to="/news&events">News & Events</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    shrink() {
      return [this.height ? "header shrink" : "header"];
    },
  },
  data() {
    return {
      height: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.execTest);
  },
  methods: {
    execTest() {
      if (window.scrollY > 150) {
        this.height = true;
      } else {
        this.height = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Slabo+27px|Open+Sans);

$font-heading: "Slabo 27px", serif;
$font-body: "Open Sans", sans-serif;

$white: #fff;
$pink: #997c7a;

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px;
  background: rgba(0, 0, 0, 0.4);
  -webkit-transition: height 0.3s;
  -moz-transition: height 0.3s;
  transition: height 0.3s;
  z-index: 1;
  margin: 0;
}

.header .wrap {
  margin: 0 auto;
  width: 100%;
  max-width: 69em;
}

.header h1,
.header .menu {
  display: inline-block;
  position: relative;
}

.header h1,
.header .menu a {
  line-height: 140px;
}

.header h1 {
  float: left;
  margin: 0;
  color: $pink;
  font-family: $font-heading;
  font-size: 72px;
  text-transform: uppercase;
}

.header .menu {
  float: right;

  a {
    margin: 0 10px;
    color: $white;
    text-decoration: none;
    font-size: 1.3em;

    &:last-of-type {
      margin-right: 0;
    }
  }
}

/* Shrinking */
.header h1,
.header nav a {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.header.shrink {
  height: 90px;
}

.header.shrink h1,
.header.shrink nav a {
  line-height: 90px;
}

.header.shrink h1 {
  font-size: 2em;
}
</style>
