<template>
  <div class="auth" v-if="!isLoggedIn">
    <router-link to="/auth"><h3>SignUp</h3></router-link>
  </div>
  <div class="auth" v-else>
    <p @click="toggleModal" class="logOut">Log out</p>
    <div class="divide"></div>
    <transition name="modal">
      <div id="overlay" v-show="tryLogOut" @click="toggleModal">
        <log-out-modal :onToggleModal="toggleModal" />
      </div>
    </transition>
    <router-link to="/user/1">Profile</router-link>
  </div>
</template>

<script>
import LogOutModal from "../Modal/logOut.vue";

export default {
  components: { LogOutModal },
  props: ["isLoggedIn"],
  data() {
    return {
      tryLogOut: false,
    };
  },
  methods: {
    toggleModal() {
      this.tryLogOut = !this.tryLogOut;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
h3 {
  text-align: center;
}
.auth {
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 4px;
  padding: 4px;
  justify-content: space-between;
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
  transition: all 0.5s ease-in;
}
.modal-leave-active {
  transition: all 0.5s ease-out;
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}
.logOut {
  cursor: pointer;
}
.divide {
  border: 0.5px solid black;
  margin-bottom: 1em;
}
</style>
