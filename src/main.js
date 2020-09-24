import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Vant from 'vant';
import 'vant/lib/index.css';

// import './assets/font/font.scss'

Vue.prototype.$dia = ()=>{
  var height = 700;
  var width = 500;
  var top=Math.round((window.screen.height-height)/2);
  var left=Math.round((window.screen.width-width)/2);
  window.open("https://live02.wasnnznyy.com/chat/chat/rRRLt%40AwGdSzybKiEGFYfA%24%24?lng=cn","","height=" + height + ", width=" + width + ", top=" + top + ", left= " + left + ", toolbar=no, menubar=no, scrollbars=auto, resizable=no, location=yes, status=no");
};

import {animateFun} from './utils/common.js';
Vue.prototype.$ami = animateFun;

Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
