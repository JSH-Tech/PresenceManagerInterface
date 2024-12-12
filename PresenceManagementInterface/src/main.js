import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import piniaPersist from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Menu from './components/menu.vue'
const app = createApp(App)
app.component("Menu", Menu)
const pinia = createPinia()
pinia.use(piniaPersist)
//app.use(createPinia())
app.use(pinia)
app.use(router)

app.mount('#app')
