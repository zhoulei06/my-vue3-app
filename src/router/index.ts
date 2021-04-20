/*
 * @Description:
 * @Author: ZHOUL
 * @Date: 2021-04-19 19:58:16
 * @LastEditTime: 2021-04-19 19:58:18
 * @LastEditors:
 */
import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = []

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
