<template>
    <Menu/>
    <main class="container">
        <!-- Titre de la page -->
        <h1>Mettre à jour le rapport</h1>
        <!-- Formulaire pour mettre à jour le rapport -->
        <form @submit.prevent="soumettre(rapport.idRapport)" enctype="multipart/form-data">
            <!-- Champ pour la période du rapport -->
            <div class="mb-3">
                <label for="periodeRapport" class="form-label">Période du rapport</label>
                <input type="text" class="form-control" id="periodeRapport" v-model="rapport.periodeRapport">
            </div>
            <!-- Champ pour la date du rapport -->
            <div class="mb-3">
                <label for="dateRapport" class="form-label">Date du rapport</label>
                <input type="date" class="form-control" id="dateRapport" v-model="rapport.dateRapport">
            </div>
            <!-- Champ pour le contenu du rapport -->
            <div class="mb-3">
                <label for="contenuRapport" class="form-label">Contenu du rapport</label>
                <textarea class="form-control" id="contenuRapport" v-model="rapport.contenuRapport"></textarea>
            </div>

            <!-- Champ pour l'employé responsable du rapport -->
             <div class="mb-3">
                <label for="idEmploye_Rapports" class="form-label">Employé </label>
                <select class="form-select" id="idEmploye_Rapports" v-model="rapport.idEmploye_Rapports">
                    <!-- Liste des employés pour choisir celui responsable -->
                    <option v-for="employe in employes" :key="employe.idEmploye" :value="employe.idEmploye">{{ employe.prenomEmploye }} {{ employe.nomEmploye }}</option>
                </select>
            </div>
            <!-- Bouton pour soumettre le formulaire -->
            <button type="submit" class="btn btn-primary">Mettre à jour</button>
        </form>
    </main>
</template>

<script setup>
import { onBeforeMount, ref, onMounted, onBeforeUnmount} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useRapport from '@/services/serviceRapport';
import axios from 'axios';
// Importation des fonctions pour obtenir et mettre à jour le rapport
const { getRapportById, updateRapport } = useRapport();

// Initialisation des objets router et route
const router = useRouter();
const route = useRoute();

// Définition de l'objet rapport avec des valeurs par défaut
const rapport = ref({
    periodeRapport: null,
    dateRapport: null,
    contenuRapport: null,
    idEmploye_Rapports: null,
});

onBeforeMount(()=>{
    const {id} = route.params
    chargerAbsence(id);
    fetchEmployes();
})

const chargerAbsence = async (id) => {
    try {
        const url = import.meta.env.VITE_BASE_URL + '/rapports/obtenirRapport/' + id;
        const response = await axios.get(url);
        console.log(response.data.data);

        const rapportData = response.data.data;
        // Convertir la date au format yyyy-mm-dd
        const dateFormatee = rapportData.dateRapport.split('T')[0]; // Prendre la partie avant 'T'

        rapport.value = {
            ...rapportData,
            dateRapport: dateFormatee, // Mettre à jour la date dans le format attendu
            idEmploye_Rapports: rapportData.idEmploye_Rapports
        };
    } catch (error) {
        console.error('Erreur lors de la récupération du rapport:', error);
    }
};

// Fonction pour soumettre le formulaire
const soumettre = async (id) => {
    try {
        const url = import.meta.env.VITE_BASE_URL + '/rapports/modifier/' + id;
        const response = await axios.put(url, rapport.value, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Vérification de la réponse reçue
        if (response.status === 200) {
            console.log("Rapport modifié avec succès!");
            router.push('/liste-rapport');
        } else {
            console.error('Réponse inattendue du serveur:', response);
        }
    } catch (error) {
        // Ajout de log détaillé pour détecter où l'erreur se produit
        console.error('Erreur lors de la mise à jour du rapport:', error);

        if (error.response) {
            // La requête a été envoyée mais le serveur a renvoyé un code d'erreur
            console.error('Erreur réponse:', error.response.data);
        } else if (error.request) {
            // La requête a été envoyée mais aucune réponse n'a été reçue
            console.error('Aucune réponse du serveur:', error.request);
        } else {
            // Problème avec la requête
            console.error('Erreur de configuration de la requête:', error.message);
        }
    }
};

const employes = ref([])
const fetchEmployes = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_BASE_URL + '/employes/listEmployes');
    employes.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors du chargement des employés:', error);
  }
};
// Fonction exécutée avant le montage du composant
// onBeforeMount(() => {
//     // Récupération des données du rapport par son ID
//     getRapportById(id)
//         .then(res => rapport.value = res.data)
//         .catch(error => console.error('Erreur lors de la récupération du rapport:', error));
// });
</script>