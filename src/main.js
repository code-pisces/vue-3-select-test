import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VSelect from 'vue-select'
import { loadFonts } from './plugins/webfontloader'
import 'vue-select/dist/vue-select.css'
loadFonts()

createApp(App)
  .use(vuetify)
  .component('vue-search-select', VSelect)
  .mount('#app')
