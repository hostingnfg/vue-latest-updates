import { createRouter, createWebHistory } from 'vue-router'
import LatestUpdatesComponent from '../components/LatestUpdatesComponent.vue'
import NotFoundComponent from '../components/NotFoundComponent.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: LatestUpdatesComponent,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFoundComponent,
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router
