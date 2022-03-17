import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueDOMPurifyHTML from 'vue-dompurify-html';


import App from './App.vue'
import router from './router'
import './assets/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueDOMPurifyHTML)

app.mount('#app')
