import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoList from '../views/ToDoList.vue'
import NewToDo from '../components/NewToDo.vue'
import ViewToDo from '../views/ViewToDo.vue'
import EditToDo from '../views/EditToDo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ToDoList',
    component: ToDoList
  },
  {
    path: '/new',
    name: 'new',
    component: NewToDo
  },
  {
    path: '/view/:id',
    name: 'view',
    component: ViewToDo,
    props: true
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditToDo,
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})

export default router
