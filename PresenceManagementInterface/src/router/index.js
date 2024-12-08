import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home.vue'
import AjoutRapport from '@/components/rapports/AjoutRapport.vue'
import ModifierRapport from '@/components/rapports/ModifierRapport.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Route menu principal
    {
      path: '/',
      name: 'home',
      component: home,
    },
    //Route ajout rapport
    {
      path: '/ajoutRapport',
      name: 'AjoutRapport',
      component: AjoutRapport,
    },
    //Route modification rapport
    {
      path: '/modifierRapport/:id',
      name: 'ModifierRapport',
      component: ModifierRapport,
    }
  ],
})

export default router
