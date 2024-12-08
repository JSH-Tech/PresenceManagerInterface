<template>
    <main>
        <!-- Titre de la page -->
        <h1>Mettre à jour le rapport</h1>
        <!-- Formulaire pour mettre à jour le rapport -->
        <form @submit.prevent="soumettre" enctype="multipart/form-data">
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
            <!-- Bouton pour soumettre le formulaire -->
            <button type="submit" class="btn btn-primary">Mettre à jour</button>
        </form>
    </main>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useRapport from '@/services/serviceRapport';

// Importation des fonctions pour obtenir et mettre à jour le rapport
const { getRapportById, updateRapport } = useRapport();

// Initialisation des objets router et route
const router = useRouter();
const route = useRoute();
const { id } = route.params;

// Définition de l'objet rapport avec des valeurs par défaut
const rapport = ref({
    periodeRapport: null,
    dateRapport: null,
    contenuRapport: null,
});

// Fonction pour soumettre le formulaire
const soumettre = async () => {
    try {
        // Appel de la fonction pour mettre à jour le rapport
        await updateRapport(id, rapport.value);
        // Redirection vers la liste des rapports après la mise à jour
        router.push({ name: 'RapportsList' });
    } catch (error) {
        // Affichage d'un message d'erreur en cas de problème
        console.error('Erreur lors de la mise à jour du rapport:', error);
    }
};

// Fonction exécutée avant le montage du composant
onBeforeMount(() => {
    // Récupération des données du rapport par son ID
    getRapportById(id)
        .then(res => rapport.value = res.data)
        .catch(error => console.error('Erreur lors de la récupération du rapport:', error));
});
</script>