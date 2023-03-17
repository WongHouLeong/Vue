import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'
const routes = [
  {
    path: '/', //主页 根目录
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router