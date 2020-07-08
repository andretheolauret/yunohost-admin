import Vue from 'vue'
import App from './App.vue'
import './plugins/bootstrap-vue'
import i18n from './plugins/i18n'
import router from './plugins/router'

import * as globalsComponents from './components/globals'


Vue.config.productionTip = false

// Register global components
for (let component of Object.values(globalsComponents)) {
     Vue.component(component.name, component)
}


new Vue({
    i18n,
    router,
    render: h => h(App),
}).$mount('#app')
