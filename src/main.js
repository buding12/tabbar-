import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入bootstrap和字体图标
import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'

// 全局指令
Vue.directive('foucs', {
  inserted(el) {
    el.focus()
  }
})
// 全局配置
new Vue({
  render: h => h(App),
}).$mount('#app')
