import { createApp } from 'vue'
import {createVuetify} from 'vuetify'
import 'vuetify/styles'
import App from './App.vue'
import router from './router'

import * as components from 'vuetify/components'


const app = createApp(App)

const vuetify = createVuetify(
    {components},
)

app.use(router)
app.use(vuetify)

app.mount('#app')
