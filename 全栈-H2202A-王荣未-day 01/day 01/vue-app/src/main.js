import Vue from 'vue';
import App from './App.vue';
import { store } from "./store";
import  router  from "./router";
import ElementUI from 'element-ui';
import axios from '@/utils/request';
import i18n from '@/lang';



import "@/assets/css/global.css";
import "@/assets/fonts/iconfont.css";
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
