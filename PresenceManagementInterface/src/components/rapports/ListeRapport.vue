<template>
    <Menu/>
    <main class="container">
        <h1>Liste des rapports</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID Rapport</th>
                    <th>Période</th>
                    <th>Date</th>
                    <th>Contenu</th>
                    <th>Employé</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- Boucle sur chaque rapport dans la liste des rapports -->
                <tr v-for="rapport in listeRapports" :key="rapport.idRapport">
                    <td>{{ rapport.idRapport }}</td>
                    <td>{{ rapport.periodeRapport }}</td>
                    <td>{{ rapport.dateRapport }}</td>
                    <td>{{ rapport.contenuRapport }}</td>
                    <td>{{ rapport?.Employe?.nomEmploye }} {{ rapport?.Employe?.prenomEmploye }}</td>
                    <td>
                        <!-- Bouton pour mettre à jour le rapport -->
                        <button class="btn btn-primary" @click="update(rapport.idRapport)">Modifier</button>
                        <!-- Bouton pour voir les détails du rapport -->
                        <!-- <button class="btn btn-success" @click="goToDetails(rapport.idRapport)">Details</button> -->
                        <!-- Bouton pour supprimer le rapport -->
                        <button class="btn btn-danger" @click="supprimer(rapport.idRapport)">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script setup>
// Importation des fonctions et des hooks nécessaires
import { onBeforeMount, ref } from "vue";
import useRapport from '../../services/serviceRapport'
import { useRouter } from "vue-router";

// Récupération des fonctions du service de rapport
const { getAllRapports, deleteRapport } = useRapport()

// Déclaration de la liste des rapports comme référence réactive
const listeRapports = ref([])
// Initialisation du routeur
const router = useRouter()

// Fonction pour supprimer un rapport
const supprimer = id => {
    // Affichage de la boîte de dialogue de confirmation
    const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer ce rapport ?");

    // Si l'utilisateur confirme la suppression
    if (confirmation) {
        deleteRapport(id)
            .then((res) => {
                console.log('suppression', res);
                // Mise à jour de la liste des rapports après suppression
                getAllRapports()
                    .then((res) => listeRapports.value = res.data)
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    } else {
        // Si l'utilisateur annule la suppression, on affiche un message ou on fait autre chose
        console.log("Suppression annulée");
    }
}


// Fonction pour rediriger vers la page de mise à jour du rapport
const update = (id) => {
    router.push(`/modifier-rapport/${id}`)
}

// Chargement des rapports avant le montage du composant
onBeforeMount(() => {
    console.log(import.meta.env.VITE_BASE_URL);
    
    getAllRapports()
    .then((res) => {
        console.log(res.data);  // Vérifiez la structure des données ici
        listeRapports.value = res.data
    })
    .catch(err => console.log(err))
})

// Fonction pour rediriger vers la page de détails du rapport
const goToDetails = id => {
    router.push(`/rapport-details/${id}`)
}
</script>

<style scoped>
.table {
    width: 100%;
    margin: 20px 0;
}
</style>