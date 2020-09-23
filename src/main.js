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

import './assets/font/font.scss'

Vue.prototype.$dia = ()=>{
  // var form = document.createElement('form');
  // form.action = 'https://live02.wasnnznyy.com/chat/chat/rRRLt%40AwGdSzybKiEGFYfA%24%24?lng=cn';
  // form.target = '_blank';
  // form.method = 'POST';
  // document.body.appendChild(form);
  // form.submit();
  window.open("https://live02.wasnnznyy.com/chat/chat/rRRLt%40AwGdSzybKiEGFYfA%24%24?lng=cn","","top=200,right=500,width=500,height=700");
};

import {animateFun} from './utils/common.js';
Vue.prototype.$ami = animateFun;

Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
