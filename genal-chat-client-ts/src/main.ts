import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router';
import store from './store';
import Viewer from 'v-viewer';

const app = createApp(App);
const plugins = [router, store];

plugins.forEach(plugin => {
  app.use(plugin);
})

app.mount('#app')
