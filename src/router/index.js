import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LocationForm from '../views/LocationForm.vue'
import AnimalForm from '../views/AnimalForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Locations',
    component: Home
  },
  {
    path: '/animals',
    name: 'Animal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Animals.vue')
  },
  {
    path: '/locations/new',
    name: 'Location Form',
    component: LocationForm
  },
  {
    path: '/animals/new',
    name: 'Animal Form',
    component: AnimalForm
  }
]

const router = new VueRouter({
  routes
})

export default router
