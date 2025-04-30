import { createRouter, createWebHistory } from "vue-router";
import Catalog from "./components/Twopage/Catalog.vue"
import Kap_repair from "./components/Threepage/Kap_repair.vue"
import Successfully from "./components/Fourpage/Successfully.vue"
import Home from "./components/Onepage/Home.vue"

export default createRouter({
    history: createWebHistory(),
        routes: [
        { path: '/home', component: Home, alias: '/'},
        { path: '/catalog', component: Catalog},
        { path: '/Kap_repair', component: Kap_repair},
        { path: '/Successfully', component: Successfully}
    ]
})