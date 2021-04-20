/*
 * @Description:
 * @Author: ZHOUL
 * @Date: 2021-04-20 21:04:37
 * @LastEditTime: 2021-04-20 21:12:41
 * @LastEditors:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
