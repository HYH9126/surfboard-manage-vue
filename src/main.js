import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'
import store from '@/vuex/store'
// import componentList from '@/components'
import '@/filters'
/* @if NODE_ENV=='dev' */
import 'vconsole'
/* @endif */

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import './sssets/style/global.css'

Vue.use(VueI18n)
Vue.use(ElementUI)

Vue.config.lang = 'zh-cn'
Vue.locale('zh-cn', zhLocale)
Vue.locale('en', enLocale)

Vue.config.productionTip = false

/* eslint-disable no-new */ 
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
