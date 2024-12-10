<template>
    <main class="container">
        <h1>Ajout d'un Rapport</h1>
        <form @submit.prevent="submit">
            <div class="mb-3">
                <label for="periodeRapport" class="form-label">Période du Rapport</label>
                <input v-model="rapport.periodeRapport" type="text" class="form-control" id="periodeRapport" required>
            </div>
            <div class="mb-3">
                <label for="dateRapport" class="form-label">Date du Rapport</label>
                <input v-model="rapport.dateRapport" type="date" class="form-control" id="dateRapport" required>
            </div>
            <div class="mb-3">
                <label for="contenuRapport" class="form-label">Contenu</label>
                <textarea v-model="rapport.contenuRapport" class="form-control" id="contenuRapport" rows="5" required></textarea>
            </div>
            <div class="mb-3">
                <label for="idEmploye" class="form-label">Employé</label>
                <select v-model="rapport.idEmploye" class="form-select" id="idEmploye" required>
                    <option v-for="employe in employes" :key="employe.idEmploye" :value="employe.idEmploye">
                        {{ employe.nomEmploye }} {{ employe.prenomEmploye }}
                    </option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </main>
</template>

<script setup>
// Importation des fonctions nécessaires de Vue et Vue Router
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const { id } = route.params;

// Définition de l'objet rapport avec des valeurs initiales nulles
const rapport = ref({
    periodeRapport: null,
    dateRapport: null,
    contenuRapport: null,
});

const employes = ref([]); // Liste des employés

// Fonction pour récupérer les employés
const fetchEmployes = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_BASE_URL + '/employes/listEmployes');
    employes.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors du chargement des employés:', error);
  }
};

// Fonction pour soumettre le formulaire
const submit = () => {
    const url = !id 
        ? import.meta.env.VITE_BASE_URL + '/rapports/ajout' 
        : import.meta.env.VITE_BASE_URL + '/rapports/modifier/' + id;

    if (!id) {
        axios.post(url, rapport.value)
  .then(() => {
      alert('Rapport ajouté avec succès.');
      router.push('/');
  })
  .catch(err => {
      if (err.response && err.response.status === 400) {
          alert('Erreur : ' + err.response.data.message);
      } else {
          console.error(err);
      }
  });
    }else{
        axios.put(url, rapport.value)
  .then(() => {
      alert('Rapport ajouté avec succès.');
      router.push('/');
  })
  .catch(err => {
      if (err.response && err.response.status === 400) {
          alert('Erreur : ' + err.response.data.message);
      } else {
          console.error(err);
      }
  });
    }
};

// Chargement des données si un ID est présent dans l'URL
onBeforeMount(() => {
    if (id) {
        const url = import.meta.env.VITE_BASE_URL + '/rapports/listRapports' + id;
        axios.get(url)
            .then(res => {
                rapport.value = res.data;
            })
            .catch(err => console.error(err));
    }

    fetchEmployes();
});

</script>


