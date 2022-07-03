import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixins from "./mixins";
import "@/styles/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/ys.css";
import "@/styles/ih_kim.css";
import "@/styles/yuri.css";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

createApp(App)
  .use(store)
  .use(router)
  .component("Datepicker", Datepicker)
  .mount("#app");
