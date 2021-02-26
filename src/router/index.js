import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/Top'
import Profile from '@/views/Profile'
import Portfolio from '@/views/Portfolio'
import Contact from '@/views/Contact'
import Skills from '@/views/Skills'

Vue.use(VueRouter)

const routes = [
 {
   path:'/',
   component:Top,
   name:'Top'
 },
 {
  path:'/Profile',
  component:Profile,
  name:'Profile'
 },
 {
  path:'/Portfolio',
  component:Portfolio,
  name:'Portfolio'
 },
 {
  path:'/Contact',
  component:Contact,
  name:'Contact'
 },
 {
  path:'/Skills',
  component:Skills,
  name:'Skills'
 },
 
 {
   path:'*',
   redirect:'/'
 }
]

const router = new VueRouter({
  routes
})

export default router
