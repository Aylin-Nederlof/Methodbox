
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import DetailView from '@/components/DetailView'
import addMethodForm from '@/components/addMethodForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/DetailView/:methodeID/:methodeNaam',
      name: 'DetailView',
      component: DetailView,
    },
    {
      path: '/addMethodForm',
      name: 'addMethodForm',
      component: addMethodForm
    },
  ]
})
