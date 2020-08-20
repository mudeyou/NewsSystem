import Vue from 'vue'
import App from './App.vue'
import "./assets/style/reset.css"
import router from "./routes/router.js"
import store from "./store/index"
store.dispatch("channels/fetchDatas");

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
