import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
export const user = {
  namespaced: true,
  state() {
    return {};
  },
  getters,
  mutations,
  actions,
};
