import bootstrap from 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(bootstrap).use(router).mount('#app')
