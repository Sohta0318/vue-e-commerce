<template>
  <div class="container">
    <new-item @select="selectItem" :allItem="allItem" />
    <new-item @select="selectItem" :allItem="allItem" />
    <new-item @select="selectItem" :allItem="allItem" />
    <new-item @select="selectItem" :allItem="allItem" />
    <new-item @select="selectItem" :allItem="allItem" />
    <new-item @select="selectItem" :allItem="allItem" />
    <div class="center" v-if="!readMore">
      <a @click="read" :class="buttonClass">
        <span>{{ isOpen }}</span>
      </a>
    </div>

    <transition name="loadMore">
      <div v-if="readMore && !isLoading">
        <new-item @select="selectItem" :allItem="allItem" />
        <new-item @select="selectItem" :allItem="allItem" />
        <new-item @select="selectItem" :allItem="allItem" />
        <new-item @select="selectItem" :allItem="allItem" />
        <new-item @select="selectItem" :allItem="allItem" />
        <new-item @select="selectItem" :allItem="allItem" />
      </div>
    </transition>

    <div class="center" v-if="readMore">
      <a @click="returnTop" :class="buttonClass">
        <span>{{ isOpen }}</span>
      </a>
    </div>

    <button>Add to Cart</button>
  </div>
</template>

<script>
import NewItem from "./Cards/newItem.vue";
export default {
  components: {
    NewItem,
  },
  data() {
    return {
      readMore: false,
      isLoading: false,
    };
  },
  props: ["allItem"],
  emits: ["select"],
  methods: {
    selectItem(item) {
      this.$emit("select", item);
    },
    read() {
      this.isLoading = true;
      setTimeout(() => {
        this.readMore = !this.readMore;
        this.isLoading = false;
        // window.scrollTo({
        //   top: 2000,
        //   behavior: "smooth",
        // });
      }, 2000);
    },
    returnTop() {
      this.readMore = !this.readMore;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  computed: {
    isOpen() {
      return this.readMore ? "Back to Regular" : "Load More Obentou";
    },
    buttonClass() {
      return "btn btn-border";
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 6em;
  z-index: 33;
}
.load {
  display: block;
  width: 15em;
  margin: 3em auto;
  padding: 1em;
}
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

.center {
  text-align: center;
  margin-top: 3em;
}

.btn,
a.btn,
button.btn {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}

a.btn-border {
  margin-bottom: 12px;
  padding: 0;

  -webkit-transition: all 0.3s;

  transition: all 0.3s;

  border-radius: 0;
}

a.btn-border span {
  position: relative;

  display: block;

  padding: 1.25rem 3rem;

  color: #000;
  border: 2px solid #000;
  border-radius: 0.5rem;
  background: #fff;
}

a.btn-border:before {
  position: absolute;
  bottom: -8px;
  left: 0;

  display: block;

  width: 100%;
  height: 14px;

  content: "";
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  border: 2px solid #000;
  border-top: 1px solid #000;
  border-radius: 0 0 0.5rem 0.5rem;
  background-image: -webkit-repeating-linear-gradient(
    135deg,
    #000,
    #000 1px,
    transparent 2px,
    transparent 5px
  );
  background-image: repeating-linear-gradient(
    -45deg,
    #000,
    #000 1px,
    transparent 2px,
    transparent 5px
  );
  background-size: 7px 7px;

  -webkit-backface-visibility: hidden;

  backface-visibility: hidden;
}

a.btn-border:hover {
  -webkit-transform: translate(0, 3px);
  transform: translate(0, 3px);
}

a.btn-border:hover:before {
  bottom: -5px;
}

a.btn-border:active {
  -webkit-transform: translate(0, 7px);
  transform: translate(0, 7px);
}

a.btn-border:active:before {
  bottom: -1px;
}

/* Needs to be fixed pop up */
.loadMore-enter-from {
  /* opacity: 0; */
  scale: 0.8;
}
.loadMore-enter-active {
  transition: all 1s;
}
.loadMore-enter-to {
  /* opacity: 1; */
  scale: 1.1;
}
</style>
