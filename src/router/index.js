import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTodosView from '../views/AllTodosView'
import InProgressTodosView from '../views/InProgressTodosView'
import DoneTodosView from '../views/DoneTodosView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All',
    component: AllTodosView,
  },
  {
    path: '/in-progress',
    name: 'InProgress',
    component: InProgressTodosView,
  },
  {
    path: '/done',
    name: 'Done',
    component: DoneTodosView,
  }
]

const router = new VueRouter({
  routes
})

export default router
