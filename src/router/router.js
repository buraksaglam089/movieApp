import { createRouter, createWebHistory } from 'vue-router'
import Movie from '../views/Movie.vue'
import Tv from '../views/Tv.vue'
import Actors from '../views/Actors.vue'
import Home from '../views/Home.vue'
import BaseCard from '../components/BaseCard.vue'


const routes = [ 
  {
  
    path: '/movies',
    name: 'Movie',
    component: Movie,

  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'home/:id',
        name:'BaseCard',
        component:BaseCard
      }]
    
  },
  {
    path: '/tv',
    name: 'TV',
    component: Tv
  },
  {
    path: '/actors',
    name: 'Actors',
    component: Actors

  }

] 
  const router = createRouter({
    history: createWebHistory(),
    routes,
  }); 
  export default router

