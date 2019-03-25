import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainContent from '@/components/manifest/InRoad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/left',
      name: 'Main',
      component: MainContent
    }
  ]
})
