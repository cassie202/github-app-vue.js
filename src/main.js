// import { createApp } from 'vue'
// import App from './App.vue'
// import router from "./routes"
// import './App.css'
// import './Home.css'

// app.use(router);
// createApp(App).mount('#app')

import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import "./App.css"
import router from "./routes"
// import { routes } from './routes'

// const router = createRouter({
//     history: createWebHistory(),
//     routes:routes
// })



createApp(App).use(router).mount('#app')




