import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import {
  listOfImages,
  listOfItems,
  newRelease,
} from "../../../data/dummy-data";

export const items = {
  namespaced: true,
  state() {
    return {
      orderHistory: [],
      cart: [],
      items: listOfItems,
      images: listOfImages,
      newRelease: newRelease,
    };
  },
  getters,
  mutations,
  actions,
};
