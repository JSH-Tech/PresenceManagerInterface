<template>
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Ceci est la page d'accueil de votre application Vue.js.</p>
      <router-link to="/ajoutRapport">Ajouter un rapport</router-link>
      <router-link to="/modifierRapport/1">Modifier un rapport</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>