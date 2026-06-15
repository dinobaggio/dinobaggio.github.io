
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import BadrPortofolio from './pages/portofolio/BadrPortofolio.vue'
import NusantechPortofolio from './pages/portofolio/NusantechPortofolio.vue'
import CV from './pages/CV.vue'
import PortfolioPrint from './pages/PortfolioPrint.vue'
import KledoPortofolio from './pages/portofolio/KledoPortofolio.vue'
import BecoursePortofolio from './pages/portofolio/BecoursePortofolio.vue'

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
  }, {
    path: '/cv',
    name: 'CV',
    component: CV
  }, {
    path: '/kledo-portofolio',
    name: 'KledoPortofolio',
    component: KledoPortofolio
  }, {
    path: '/becourse-portofolio',
    name: 'BecoursePortofolio',
    component: BecoursePortofolio
  }, {
    path: '/portfolio-print',
    name: 'PortfolioPrint',
    component: PortfolioPrint
  }],
})

export default router