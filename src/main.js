import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//pour importer les routes ;
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import about from './views/about.vue'

const routes = [
        
        { path: '/',component : Home } ,
        { path: '/about',component : about },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
