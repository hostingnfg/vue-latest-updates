import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

window.LATEST_ARTICLES = [
    {
        "title": "Find new ways to travel north",
        "publishDate": "2024-02-13T13:51:50.417Z",
        "category": "news",
        "url": "/articles/4738.html"
    },
    {
        "title": "When will it become possible to use time travel in order to fix your earlier mistakes?",
        "publishDate": "2024-02-12T12:18:10.317Z",
        "category": "essay",
        "url": "/articles/7256.html"
    },
    {
        "title": "10 ways to write better text",
        "publishDate": "2024-02-11T09:00:32.200Z",
        "category": "news",
        "url": "/articles/7247.html"
    },
    {
        "title": "Announcement: we have a new website category",
        "publishDate": "2024-02-10T17:12:13.102Z",
        "category": "news",
        "url": "/articles/1749.html"
    },
    {
        "title": "Weekly news",
        "publishDate": "2024-02-09T00:23:15.276Z",
        "category": "news",
        "url": "/articles/1538.html"
    },
    {
        "title": "In-depth travel guide for Tanzania",
        "publishDate": "2024-02-09T11:12:43.003Z",
        "category": "essay",
        "url": "/articles/2594.html"
    }
];

const app = createApp(App)
app.use(router)
app.mount('#app')
