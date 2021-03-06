
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import DetailView from '@/components/DetailView'
import addMethodForm from '@/components/addMethodForm'
import editMethodForm from '@/components/editMethodForm'
import AddResult from '@/components/AddResult'
import editResult from '@/components/editResult'

Vue.use(Router)

export default new Router({
  
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
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
    {
    path: '/editMethodForm/:methodeID/:methodeNaam',
    name: 'editMethodForm',
    component: editMethodForm,
    },
    {
    path: '/AddResult/:methodeID/:methodeNaam',
    name: 'AddResult',
    component: AddResult,
    },
    {
    path: '/editResult/:methodeID/:resultID/:methodeNaam',
    name: 'editResult',
    component: editResult,
    },
  ]
})
