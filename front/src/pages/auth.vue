<template>
  <component :is="component" />
</template>

<script>
import LogIn from "../components/Auth/logIn.vue";
import SignUp from "../components/Auth/signUp.vue";
export default {
  components: {
    LogIn,
    SignUp,
  },
  // provide() {
  //   return {
  //     title: this.setTitle,
  //   };
  // },

  computed: {
    signUpOrLogin() {
      return this.$store.getters.signUpOrLogin;
    },
    component() {
      return this.signUpOrLogin ? "log-in" : "sign-up";
      // return "sign-up";
      // return "log-in";
    },
    // setTitle() {
    //   return this.hasAccount ? "Login" : "Sign Up";
    // },
  },
};
</script>

<style></style>
