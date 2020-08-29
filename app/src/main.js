import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import i18n from './i18n'
import router from './router'
import store from './store'

import * as globalsComponents from './components/globals'

Vue.config.productionTip = false

// Styles are imported in `src/App.vue` <style>
Vue.use(BootstrapVue)

// Register global components
for (const component of Object.values(globalsComponents)) {
  Vue.component(component.name, component)
}

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
