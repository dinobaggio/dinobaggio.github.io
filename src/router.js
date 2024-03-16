
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import BadrPortofolio from './pages/portofolio/BadrPortofolio.vue'
import NusantechPortofolio from './pages/portofolio/NusantechPortofolio.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/badr-portofolio',
    name: 'BadrPortofolio',
    component: BadrPortofolio
  }, {
    path: '/nusantech-portofolio',
    name: 'NusantechPorotofolio',
    component: NusantechPortofolio
  }],
})

export default router