import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui';
import i18n from '@/lang'
import components from './components';

import '@/assets/css/style.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fonts/iconfont.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  components,
  render: h => h(App)
}).$mount('#app')
