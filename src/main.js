import { createApp } from 'vue'
import App from './vue/App.vue'
import { store } from './vue/store';

const app = createApp(App);
app.use(store);
app.mount("#app");