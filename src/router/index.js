import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import firebase from 'firebase/app'

const Login = () => import('../views/Login.vue')
const Register = () => import('../views/Register.vue')
const Profile = () => import('../views/Profile.vue')
const Rating = () => import('../views/Rating.vue')
const Rank = () => import('../views/Rank.vue')
const ApplicationsRanks = () => import('../views/ApplicationsRanks.vue')
const Tournament = () => import('../views/Tournament.vue')
const AddTournament = () => import('../views/AddTournament.vue')
const TournamentList = () => import('../views/TournamentList.vue')

import 'vuetify/dist/vuetify.min.css'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Main',
        meta: {layout: 'main', auth: true},
        component: Main
    },
    {
        path: '/login',
        name: 'login',
        meta: {layout: 'empty'},
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        meta: {layout: 'empty'},
        component: Register
    },
    {
        path: '/profile',
        name: 'profile',
        meta: {layout: 'main', auth: true},
        component: Profile
    },
    {
        path: '/rating',
        name: 'rating',
        meta: {layout: 'main', auth: true},
        component: Rating
    },
    {
        path: '/rank',
        name: 'rank',
        meta: {layout: 'main', auth: true},
        component: Rank
    },
    {
        path: '/applicationsranks',
        name: 'applicationsranks',
        meta: {layout: 'main', auth: true},
        component: ApplicationsRanks
    },
    {
        path: '/tournament',
        name: 'tournament',
        meta: {layout: 'main', auth: true},
        component: Tournament
    },
    {
        path: '/addtournament',
        name: 'addtournament',
        meta: {layout: 'main', auth: true},
        component: AddTournament
    },
    {
        path: '/detail_tournament/:id',
        name: 'detail_tournament',
        meta: {layout: 'main', auth: true},
        component: TournamentList
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requireAuth = to.matched.some(record => record.meta.auth)

    if (requireAuth && !currentUser) {
        next('/login')
    } else {
        next()
    }
})

export default router
