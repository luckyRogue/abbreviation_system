import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Table, Icon } from 'ant-design-vue';
import 'leaflet/dist/leaflet.css'
// 引入Leaflet对象 挂载到Vue上，便于全局使用，也可以单独页面中单独引用
import * as L from 'leaflet'
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'
import '@/assets/global.scss'

Vue.config.productionTip = false
Vue.use(Button).use(Table).use(Icon);
Vue.prototype.$L = L

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
