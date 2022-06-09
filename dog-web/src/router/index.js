import { createRouter, createWebHistory } from 'vue-router'
//lazy load
const DogDetails = () => import('../views/DogDetails.vue');
const Home = () => import('../views/Home.vue');
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'DogDetails',
    component: DogDetails,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
