<template>
  <header>
    <div class="wrapper">
      <div class="left" @mouseenter="hovered" @mouseleave="hovered">
        <img :src="src" alt="door-closed" class="door" />
        <auth v-if="isHovered" :isLoggedIn="isLoggedIn" />
      </div>

      <div class="right">
        <search class="search" @filteredItem="items" />
        <img
          src="../../assets/images/cart4.svg"
          alt="cart"
          @click="toggleModal"
          class="cart"
        />
        <side-nav />
      </div>
      <filtered-item
        class="filteredItem"
        v-if="!isEmpty"
        :filteredItem="filteredItem"
      />
      <transition name="modal">
        <div id="overlay" v-show="isModal" @click="toggleModal">
          <cart-modal :toggleModal="toggleModal" />
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import Auth from "../Auth/auth.vue";
import Search from "../Contents/search.vue";
import CartModal from "../Modal/cart.vue";
import FilteredItem from "../Contents/filteredItem.vue";
import SideNav from "./nav.vue";

export default {
  components: {
    Auth,
    Search,
    CartModal,
    FilteredItem,
    SideNav,
  },
  props: ["purchase"],
  data() {
    return {
      isHovered: false,
      isModal: false,
      isEmpty: true,
      filteredItem: [],
    };
  },
  methods: {
    hovered() {
      this.isHovered = !this.isHovered;
    },
    toggleModal() {
      this.isModal = !this.isModal;
    },
    items(items) {
      this.filteredItem = items;
      if (items) {
        this.isEmpty = items.length === 0;
      } else {
        this.isEmpty = true;
      }
    },
  },
  computed: {
    src() {
      return this.isLoggedIn
        ? require("../../assets/images/door-open.svg")
        : require("../../assets/images/door-closed.svg");
    },
    isLoggedIn() {
      return this.$store.getters.hasAccount;
    },
  },
};
</script>

<style scoped>
img {
  width: 4em;
}
header {
  position: sticky;
  top: 0;
  z-index: 1;
}
.wrapper {
  display: flex;
  position: relative;
}
.left {
  position: absolute;
  top: 4em;
  left: 5em;
}
.right {
  position: absolute;
  top: 4em;
  right: 6em;
  display: flex;
}

.search {
  margin-top: -1em;
  margin-right: 6em;
}
#overlay {
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active {
  transition: all 1s ease-in;
}
.modal-leave-active {
  transition: all 1s ease-out;
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}
.cart {
  cursor: pointer;
  margin-right: 4em;
}
.door {
  cursor: pointer;
}
.filteredItem {
  position: absolute;
  top: 10em;
  right: 22em;
}
</style>
