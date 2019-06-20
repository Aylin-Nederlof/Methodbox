// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/nl'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faPercentage, faRecycle, faEuroSign, faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App'
import router from './router'
import store from './store/store'

library.add(faPercentage, faClock, faRecycle, faEuroSign, faPlus, faUserCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'

})
