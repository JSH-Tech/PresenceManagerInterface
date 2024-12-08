<template>
    <main>
        <h1>Ajouter un rapport</h1>
        <!-- Formulaire pour ajouter un rapport -->
        <form @submit.prevent="soumettre" enctype="multipart/form-data">
            <div class="mb-3">
                <label for="periodeRapport" class="form-label">Période du rapport</label>
                <!-- Champ de saisie pour la période du rapport -->
                <input type="text" class="form-control" id="periodeRapport" v-model="rapport.periodeRapport">
            </div>
            <div class="mb-3">
                <label for="dateRapport" class="form-label">Date du rapport</label>
                <!-- Champ de saisie pour la date du rapport -->
                <input type="date" class="form-control" id="dateRapport" v-model="rapport.dateRapport">
            </div>
            <div class="mb-3">
                <label for="contenuRapport" class="form-label">Contenu du rapport</label>
                <!-- Champ de saisie pour le contenu du rapport -->
                <textarea class="form-control" id="contenuRapport" v-model="rapport.contenuRapport"></textarea>
            </div>
            <!-- Bouton pour soumettre le formulaire -->
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </main>
</template>

<script setup>
// Importation des fonctions nécessaires de Vue et Vue Router
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useRapport from '@/services/serviceRapport';

// Extraction de la fonction addRapport du service
const { addRapport } = useRapport();
const router = useRouter();

// Définition de l'objet rapport avec des valeurs initiales nulles
const rapport = ref({
    periodeRapport: null,
    dateRapport: null,
    contenuRapport: null,
});

// Fonction pour soumettre le formulaire
const soumettre = () => {
    const formData = new FormData();

    // Ajout des valeurs du rapport au FormData
    for (let clef in rapport.value) {
        formData.set(clef, rapport.value[clef]);
    }

    // Appel de la fonction addRapport avec les données du formulaire
    addRapport(formData)
        .then(res => {
            console.log(res);
            // Redirection vers la page d'accueil après succès
            router.push('/');
        })
        .catch(err => {
            console.log("Problème lors de l'ajout", err);
        });
};
</script>