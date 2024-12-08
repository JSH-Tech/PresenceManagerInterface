<template>
    <main>
        <!-- Titre principal de la page -->
        <h1>Liste des retards</h1>
        <!-- Tableau pour afficher la liste des retards -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID Retard</th>
                    <th>Date</th>
                    <th>Heure Début</th>
                    <th>Heure Fin</th>
                    <th>Justification</th>
                    <th>Employé</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- Boucle sur chaque retard dans la liste -->
                <tr v-for="retard in listeRetards" :key="retard.idRetard">
                    <td>{{ retard.idRetard }}</td>
                    <td>{{ retard.dateRetard }}</td>
                    <td>{{ retard.heureDebutRetards }}</td>
                    <td>{{ retard.heureFinRetards }}</td>
                    <td>{{ retard.justificationRetard }}</td>
                    <td>{{ retard.Employe.nomEmploye }} {{ retard.Employe.prenomEmploye }}</td>
                    <td>
                        <!-- Bouton pour mettre à jour un retard -->
                        <button class="btn btn-primary" @click="update(retard.idRetard)">Modifier</button>
                        <!-- Bouton pour afficher les détails d'un retard -->
                        <button class="btn btn-success" @click="goToDetails(retard.idRetard)">Détails</button>
                        <!-- Bouton pour supprimer un retard -->
                        <button class="btn btn-danger" @click="supprimer(retard.idRetard)">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script setup>
/**
 * Importation des fonctions nécessaires de Vue.
 * `onBeforeMount` est utilisé pour exécuter du code avant que le composant ne soit monté.
 * `ref` est utilisé pour déclarer des variables réactives.
 */
import { onBeforeMount, ref } from "vue";
/**
 * Importation des services pour gérer les retards.
 * `useRetard` contient les fonctions nécessaires pour interagir avec les retards (API ou autres).
 */
import useRetard from '../../services/serviceRetard'
import { useRouter } from "vue-router";

/**
 * Récupération des méthodes depuis le service des retards.
 */
const { getAllRetards, deleteRetard } = useRetard();

/**
 * Déclaration d'une variable réactive pour contenir la liste des retards.
 */
const listeRetards = ref([]);

/**
 * Utilisation du routeur pour naviguer entre les pages.
 */
const router = useRouter();

/**
 * Fonction pour supprimer un retard en utilisant son identifiant.
 */
const supprimer = id => {
    deleteRetard(id) // Appel au service pour supprimer le retard
        .then((res) => {
            console.log('suppression', res);
            // Mise à jour de la liste après suppression
            getAllRetards()
                .then((res) => listeRetards.value = res.data)
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}

/**
 * Fonction pour naviguer vers la page de mise à jour d'un retard.
 */
const update = (id) => {
    router.push(`/update-retard/${id}`);
}

/**
 * Code exécuté avant le montage du composant pour récupérer la liste des retards.
 */
onBeforeMount(() => {
    getAllRetards()
        .then((res) => listeRetards.value = res.data) // Stockage de la liste des retards dans la variable réactive
        .catch(err => console.log(err));
})

/**
 * Fonction pour afficher les détails d'un retard.
 */
const goToDetails = id => {
    router.push(`/retard-details/${id}`);
}
</script>

<style scoped>
/* Style pour le tableau */
.table {
    width: 100%; /* Prend toute la largeur disponible */
    margin: 20px 0; /* Marge en haut et en bas du tableau */
}
</style>
