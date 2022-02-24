import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
export const auth = {
  state() {
    return {
      user: {
        _id: null,
        email: "",
        name: "",
        password: "",
      },
      hasAccount: false,
      signUpOrLogin: false,
      failSignUp: false,
      failLogin: false,
      edit: false,
    };
  },
  getters,
  mutations,
  actions,
};
