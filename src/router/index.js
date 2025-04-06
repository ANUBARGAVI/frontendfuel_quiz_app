import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Topics from '../views/Topics.vue'
import Quiz from '../views/Quiz.vue'
import Result from '../views/Result.vue'
import Answers from '@/views/Answers.vue'
import About from '@/views/About.vue'



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/topics', name: 'Topics', component: Topics },
  { path: '/quiz/:id', name: 'Quiz', component: Quiz },
  { path: '/result', name: 'Result', component: Result },
  { path: '/about', name: 'About', component: About },
  { path: '/answers', name: 'Answers', component: Answers}

  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
