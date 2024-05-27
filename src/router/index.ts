/**
 * router/index.ts
 */

import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: LoginView
    },
    {
      path: '/jimi',
      name: 'jimi',
      component: () => import('../views/JimiView.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import('../views/HelloView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // 指定したパス以外の場合、ルートパスにリダイレクトする
//   if (to.fullPath == '/') {
//     next()
//   } else if (to.fullPath == '/hello') {
//     if (localStorage.getItem('user') == null) {
//       next('/')
//     } else {
//       next()
//     }
//   } else if (to.fullPath == '/jimi') {
//     if (localStorage.getItem('user') == null) {
//       next('/')
//     } else {
//       next()
//     }
//   } else {
//     next('/')
//   }
// })

export default router
