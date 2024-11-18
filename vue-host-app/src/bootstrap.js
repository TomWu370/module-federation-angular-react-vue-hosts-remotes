import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import { createWebHistory, createRouter } from 'vue-router'

const app = createApp(App);
const RemoteButton = defineAsyncComponent(() => import("angularRemoteApp/angularRemoteApp/app-root"));
app.component("app-root", appRoot);


app.mount('#app');
