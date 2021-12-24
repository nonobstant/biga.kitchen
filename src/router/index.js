import { createRouter, createWebHistory} from 'vue-router'
//Views
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/txt',
  //   name: 'txt',
  //   component: Txt
  // }
]

// init router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
