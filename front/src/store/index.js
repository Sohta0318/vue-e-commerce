import { createStore } from "vuex";
import { user } from "./modules/user/index";
import { items } from "./modules/items/index";
import { auth } from "./modules/auth/index";

const store = createStore({
  modules: {
    user,
    items,
    auth,
  },
});
export default store;
