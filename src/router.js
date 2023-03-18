import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'

//前置函数
function requireAuth(to, from, next) {
  const token = localStorage.getItem('token');
  if (!token) {
    next({ name: 'LoginPage' });
  } else {
    next();
  }
}

const routes = [
  {
    path: '/LoginPage', //主页 根目录
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    beforeEnter: requireAuth
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router