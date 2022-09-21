import { createRouter, createWebHistory} from 'vue-router'
//Views
//import Home from '@/views/Home.vue'
import Wait from '@/views/ComingSoon.vue'

const routes = [
  {
    path: '/',
    name: 'wait',
    component: Wait
  },
  // {
  //   path: '/lab',
  //   name: 'lab',
  //   component: lab
  // }
]

// init router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
