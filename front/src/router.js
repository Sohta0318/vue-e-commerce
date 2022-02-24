import { createRouter, createWebHistory } from "vue-router";
import Auth from "./pages/auth.vue";
import Home from "./pages/home.vue";
import Main from "./pages/main.vue";
import User from "./pages/user";
import Items from "./pages/items.vue";
import Cart from "./pages/cart.vue";
import NewsAndEvents from "./pages/news&events.vue";
import Contact from "./pages/contact.vue";
import Error from "./pages/error.vue";
import ObentouDetail from "./pages/obentouDetail.vue";
import Store from "./store/index";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/auth",
      component: Auth,
      meta: {
        isPublic: true,
      },
    },
    {
      path: "/",
      component: Home,
      meta: {
        isPublic: true,
      },
    },
    {
      path: "/main",
      component: Main,
      meta: {
        isPublic: true,
      },
    },
    {
      path: "/items",
      component: Items,
    },
    {
      path: "/items/:id",
      component: ObentouDetail,
    },
    {
      path: "/cart",
      component: Cart,
    },
    {
      path: "/news&events",
      component: NewsAndEvents,
      meta: {
        isPublic: true,
      },
    },
    {
      path: "/user/:id",
      component: User,
    },
    {
      path: "/contact",
      component: Contact,
      meta: {
        isPublic: true,
      },
    },
    {
      path: "/:notFound(.*)",
      component: Error,
    },
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

router.beforeEach((to, _, next) => {
  Store.dispatch("hasAccount");
  Store.dispatch("items/fetchProducts");
  if (
    to.matched.some((page) => page.meta.isPublic || Store.state.auth.hasAccount)
  ) {
    next();
  } else {
    next("/auth");
  }
});

export default router;
