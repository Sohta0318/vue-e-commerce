export default {
  getUser(state) {
    return state.user;
  },
  hasAccount(state) {
    return state.hasAccount;
  },
  signUpOrLogin(state) {
    return state.signUpOrLogin;
  },
  trySignUp(state) {
    return state.failSignUp;
  },
  tryLogin(state) {
    return state.failLogin;
  },
  edit(state) {
    return state.edit;
  },
};
