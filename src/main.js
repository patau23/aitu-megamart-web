import "./assets/main.css";
import { createApp } from 'vue'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Notifications
import Notifications from '@kyvg/vue3-notification'

// Vue-cookie
import VueCookies from 'vue-cookies'

// Vuex
import store from '@/store/core/index'

// Router
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .use(VueCookies, {
    expires: '7d'
  })
  .use(Notifications)
  .mount('#app')
