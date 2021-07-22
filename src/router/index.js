import Vue from 'vue'
import VueRouter from 'vue-router'
import Tutors from '../components/views/tutors/Tutors'
import TutorDetails from '../components/views/tutors/TutorDetails'
import TutorRegistration from '../components/views/tutors/TutorRegistration'
import ContactTutor from '../components/views/requests/ContactTutor'
import Requests from '../components/views/requests/Requests'
import NotFound from '../components/views/notFound/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/tutors'
  },
  {
    path: '/tutors',
    name: 'Tutors',
    component: Tutors
  },
  {
    path: '/tutors/:id',
    name: 'Tutor',
    component: TutorDetails,
    props: true,
    children: [
      {
        path: 'contact',
        name: 'Contact',
        props: true,
        component: ContactTutor
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: TutorRegistration
  },
  {
    path: '/requests.js',
    name: 'Requests',
    component: Requests
  },
  {
    path: '/:notFound(.*)',
    name: 'Not found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
