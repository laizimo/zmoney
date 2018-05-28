import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Register from '@/components/register'
import Introduce from '@/components/introduce'
import Upload from '@/components/upload'
import User from '@/components/user/home'
import UserProfile from '@/components/user/profile'
import UserIndex from '@/components/user/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'profile',
          component: UserProfile
        },
        {
          path: 'index',
          component: UserIndex
        }
      ],
      beforeEnter: (to, from, next) => {
        const username = window.localStorage.getItem('username')
        if (!username) {
          this.a.push({
            path: '/login'
          })
        } else {
          next()
        }
      }
    }
  ]
})
