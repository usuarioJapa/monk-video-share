const Courses = () => import(/* webpackChunkName: "CoursesPage" */ '@/pages/Courses')
const navbar = () => import(/* webpackChunkName: "navbarComponent" */ '@/components/navbar')

export default {
  path: '/',
  name: 'Courses',
  components: {
    header: navbar,
    content: Courses
  },
  meta: {
    title: 'Monk Video Share',
    requiresAuth: true
  }
}
