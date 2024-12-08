<template>
    <main>
        <h1>Ajouter un retard</h1>
        <!-- Formulaire pour soumettre les informations du retard -->
        <form @submit.prevent="soumettre" enctype="multipart/form-data">
            <!-- Champ pour la date du retard -->
            <div class="mb-3">
                <label for="dateRetard" class="form-label">Date du retard</label>
                <input type="date" class="form-control" id="dateRetard" v-model="retard.dateRetard">
            </div>
            <!-- Champ pour l'heure de début du retard -->
            <div class="mb-3">
                <label for="heureDebutRetards" class="form-label">Heure de début du retard</label>
                <input type="time" class="form-control" id="heureDebutRetards" v-model="retard.heureDebutRetards">
            </div>
            <!-- Champ pour l'heure de fin du retard -->
            <div class="mb-3">
                <label for="heureFinRetards" class="form-label">Heure de fin du retard</label>
                <input type="time" class="form-control" id="heureFinRetards" v-model="retard.heureFinRetards">
            </div>
            <!-- Zone de texte pour la justification du retard -->
            <div class="mb-3">
                <label for="justificationRetard" class="form-label">Justification du retard</label>
                <textarea class="form-control" id="justificationRetard" v-model="retard.justificationRetard"></textarea>
            </div>
            <!-- Bouton de soumission -->
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </main>
</template>

<script setup>
// Importer les fonctions et hooks nécessaires de Vue et d'autres services
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useRetard from '@/services/serviceRetard';

// Déstructurer la fonction addRetard du service useRetard
const { addRetard } = useRetard();
const router = useRouter();

// Définir un objet réactif pour contenir les données du formulaire
const retard = ref({
    dateRetard: null,
    heureDebutRetards: null,
    heureFinRetards: null,
    justificationRetard: null,
});

// Fonction pour gérer la soumission du formulaire
const soumettre = () => {
    const formData = new FormData();

    // Remplir l'objet FormData avec les données du formulaire
    for (let clef in retard.value) {
        formData.set(clef, retard.value[clef]);
    }

    // Appeler la fonction addRetard et gérer la réponse
    addRetard(formData)
        .then(res => {
            console.log(res);
            // Rediriger vers la page d'accueil en cas de succès
            router.push('/');
        })
        .catch(err => {
            console.log("Problème lors de l'ajout", err);
        });
};
</script>