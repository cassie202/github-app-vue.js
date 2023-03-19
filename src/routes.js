
import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./components/Home-page.vue"
import RepoData from "./components/RepoData.vue"
import ErrorPage from "./components/ErrorPage.vue"


const routes =[
    {
        path:"/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path:"/:id",
        name: "RepoData",
        component: RepoData,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "ErrorPage",
        component: ErrorPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;