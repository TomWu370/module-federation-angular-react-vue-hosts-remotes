import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.compilerOptions.isCustomElement = (tag) => ["angular-app-component", "app-root"].includes(tag);

app.mount('#app');