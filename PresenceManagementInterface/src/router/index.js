import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home.vue'
import AjoutRapport from '@/components/rapports/AjoutRapport.vue'
import ModifierRapport from '@/components/rapports/ModifierRapport.vue'

import AjoutEmployes from '@/components/Employes/AjoutEmployes.vue'
import ModifierEmployes from '@/components/Employes/ModifierEmployes.vue'

import AjoutDemandesConges from '@/components/demandeConges/AjoutDemandesConges.vue'
import ModifierDemandesConges from '@/components/demandesConges/ModifierDemandesConges.vue'



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
    },

    //Route ajout employé
    {
      path: '/ajoutEmployes',
      name: 'AjoutEmployes',
      component: AjoutEmployes,
    },
    //Route modification employé
    {
      path: '/modifierEmployes/:id',
      name: 'ModifierEmployes',
      component: ModifierEmployes,
    },
    //Route ajout demande de congés
    {
      path: '/ajoutDemandesConges',
      name: 'AjoutDemandesConges',
      component: AjoutDemandesConges,
    },
    //Route modification demande de congés
    {
      path: '/modifierDemandesConges/:id',
      name: 'ModifierDemandesConges',
      component: ModifierDemandesConges,
    },
  ],
})

export default router
