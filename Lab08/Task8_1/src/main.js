import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Paginate from 'vuejs-paginate-next'


const app = createApp(App)
app.component('paginate', Paginate)

app.use(router)

app.mount('#app')
