import Vue from 'vue'
import App from './App.vue'
import Moment from 'vue-moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './proto/codec'

Vue.config.productionTip = false

Vue.use(Moment)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
