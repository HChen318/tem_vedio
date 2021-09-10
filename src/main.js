// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from 'axios';
import './axios/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import qs from 'qs'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import './assets/js/cookie.js'
import '../static/iconfont/iconfont.css'

Vue.use(VueVideoPlayer)
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.prototype.$qs = qs

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
