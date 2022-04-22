import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.config.productionTip = false
library.add(fas)
library.add(far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)
new Vue({
  render: h => h(App),
}).$mount('#app')
