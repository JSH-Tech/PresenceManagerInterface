import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home.vue'
import AjoutRapport from '@/components/rapports/AjoutRapport.vue'
import ModifierRapport from '@/components/rapports/ModifierRapport.vue'
import ListeRapport from '@/components/rapports/ListeRapport.vue'
import Login from '@/components/auth/Login.vue'
import AjoutRetard from '@/components/retards/AjoutRetard.vue'
import ListeRetard from '@/components/retards/ListeRetard.vue'
import ModifierRetard from '@/components/retards/ModifierRetard.vue'

// Importation des composants pour gerer les absences
import ListeAbsence from '@/components/absences/ListeAbsence.vue';
import AjoutAbsence from '@/components/absences/AjoutAbsence.vue';
import ModifierAbsence from '@/components/absences/ModifierAbsence.vue';

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
      path: '/ajout-rapport',
      name: 'ajout-rapport',
      component: AjoutRapport,
    },
    //Route modification rapport
    {
      path: '/modifier-rapport/:id',
      name: 'ModifierRapport',
      component: ModifierRapport,
    },
    {
      //Route liste rapport
      path: '/liste-rapport',
      name: 'ListeRapport',
      component: ListeRapport,
    },
    //Route login
    {
      path:'/login',
      name:'login',
      component: Login,
    },
    //Route ajout retard
    {
      path: '/ajout-retard',
      name: 'AjoutRetard',
      component: AjoutRetard,
    },
    //Route liste retard
    {
      path: '/liste-retard',
      name: 'ListeRetard',
      component: ListeRetard,
    },
    //Route modification retard
    {
      path: '/modifier-retard/:id',
      name: 'ModifierRetard',
      component: ModifierRetard,
    },
    // Route pour la liste des absences
  {
    path: '/listeAbsence',
    name: 'ListeAbsence',  // Nom de la route
    component: ListeAbsence, // Composant à afficher pour cette route
  },
  // Route pour ajouter une absence
  {
    path: '/ajoutAbsence',
    name: 'AjoutAbsence',  
    component: AjoutAbsence, 
  },
  // Route pour modifier une absence
  {
    path: '/modifierAbsence/:id', 
    name: 'ModifierAbsence',  
    component: ModifierAbsence, 
  }],
})

export default router
