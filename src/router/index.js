import Vue from 'vue'
import VueRouter from 'vue-router'
import Pessoas from '../views/Pessoa/Pessoas.vue'
import CadastroPessoa from '../views/Pessoa/CadastroPessoa.vue'
import Login from "../views/Login.vue"
import Menu from "../views/Menu";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Menu',
    component: Menu,
    children: [
      {
        path: '/pessoa',
        name: 'Pessoas',
        component: Pessoas,
      },
      {
        path: '/pessoa/cadastro',
        name: 'CadastroPessoa',
        component: CadastroPessoa,
      },
      {
        path: '/pessoa/editar',
        name: 'EditarPessoa',
        component: CadastroPessoa,
      },
      // {
      //   path: '/',
      //   name: 'CadastroPessoa',
      //   component: CadastroPessoa,
      // },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
