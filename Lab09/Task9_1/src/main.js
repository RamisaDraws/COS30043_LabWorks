import { createApp } from 'vue'
import {createVuetify} from 'vuetify'
import App from './App.vue'
import router from './router'
import * as components from 'vuetify/components'

const vuetify = createVuetify({
    components
})

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Paginate from 'vuejs-paginate-next'

const app = createApp(App)
app.component('paginate', Paginate)


app.use(router)
app.use(Paginate)
app.use(vuetify)

app.mount('#app')
