import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter("filterdList", function(val) {
  return val.toLocaleString();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
