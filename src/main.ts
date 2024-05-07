/**
 * main.ts
 */

// Plugins
import { registerPlugins } from './plugins/index'

// Components
import App from './App.vue'
import router from './router'

// Composables
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App)

registerPlugins(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
