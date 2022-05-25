import { createApp } from "vue";

// create app
import App from "./App.vue";
const app = createApp(App);

// use bulma
require("@/assets/main.scss");

// use pinia
import { createPinia } from "pinia";
app.use(createPinia());

// use http client
const http = require("@/helpers/http.client").default;
app.config.globalProperties.$httpClient = http;

app.mount("#app");