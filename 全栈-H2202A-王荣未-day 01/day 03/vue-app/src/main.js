import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

// 引入样式
import "@/assets/scc/style.css"
import 'element-ui/lib/theme-chalk/index.css';

// 安装饿了吗组件
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
