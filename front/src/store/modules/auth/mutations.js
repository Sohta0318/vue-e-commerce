export default {
  setUser(state) {
    const user = {
      _id: localStorage.getItem("userId"),
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    };
    state.user = user;
  },
  hasAccount(state) {
    const account = localStorage.getItem("userId");
    if (account) {
      state.hasAccount = true;
    } else {
      state.hasAccount = false;
    }
  },
  signUpOrLogin(state) {
    state.signUpOrLogin = !state.signUpOrLogin;
  },
  trySignUp(state,payload) {
    state.failSignUp = payload;
  },
  tryLogin(state,payload) {
    state.failLogin = payload;
  },
  tryEdit(state,payload){
    state.edit = payload
  }
};
