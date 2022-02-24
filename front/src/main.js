import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LayoutAll from "./components/Layouts/layout.vue";

// import BootstrapVue3 from "bootstrap-vue-3";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);
app.use(router);
app.use(store);
// app.use(BootstrapVue3);

app.component("layout-all", LayoutAll);

app.mount("#app");
