// Composables
import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('../views/Home.vue')
const login = () => import('../views/Login.vue')
const register = () => import('../views/register.vue')
const projects = () => import('../views/Projects.vue')
const todos = () => import('../views/todos.vue')


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   // route level code-splitting
      //   // this generates a separate chunk (about.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: home
      // },
      {
        path: "/login",
        name: "login",
        component: login
      },
      {
        path: "/register",
        name: "register",
        component: register
      },
      {
        path: "/projects",
        name: "projects",
        component: projects
      },
      {
        path: "/todos",
        name: "todos",
        component: todos
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
