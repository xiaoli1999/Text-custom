import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import store from './store'
import VueClipboard from 'vue-clipboard2'
import TextBasic from '@/components/TextBasic'
ViewUI.Notice.config({
    top: 60
})
Vue.use(ViewUI)
Vue.use(VueClipboard)
Vue.config.productionTip = true

Vue.prototype.$APP_VERSION = process.env.VUE_APP_VERSION
Vue.prototype.$VUE_APP_DTU_API_URL = process.env.VUE_APP_DTU_API_URL
Vue.prototype.$IS_PROD = process.env.NODE_ENV === 'production'
Vue.component('TextBasic', TextBasic)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
