import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import Vant from 'vant'
import Waterfall from '@vant/waterfall';


import './assets/reset.styl'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-lazyload/vue-lazyload.js'
import 'vant/lib/index.css'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(Vant)
Vue.use(Waterfall);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
