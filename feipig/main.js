import Vue from 'vue'
import App from './App'
import Store from './store/store.js'

Vue.config.productionTip = false
Vue.prototype.$store = Store

//引入全局组件
import homeloader from './components/homeLoder.vue'
Vue.component('homeloader',homeloader)

import loader from './components/loder.vue'
Vue.component('loader',loader)


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
