<template>
  <Menu/>
    <main class="container">
    
        <h1>Ajouter une absence</h1>
        <!-- Formulaire pour soumettre les informations d'absence -->
        <form @submit.prevent="soumettre" enctype="multipart/form-data">
            <!-- Champ pour la date de début d'absence -->
            <div class="mb-3">
                <label for="dateDebutAbsence" class="form-label">Date de début de l'absence</label>
                <input type="date" class="form-control" id="dateDebutAbsence" v-model="absence.dateDebutAbsence">
            </div>
            <!-- Champ pour la date de fin d'absence -->
            <div class="mb-3">
                <label for="dateFinAbsence" class="form-label">Date de fin de l'absence</label>
                <input type="date" class="form-control" id="dateFinAbsence" v-model="absence.dateFinAbsence">
            </div>
            <!-- Champ pour le type d'absence -->
            <div class="mb-3">
                <label for="typeabsence" class="form-label">Type d'absence</label>
                <select class="form-control" id="typeabsence" v-model="absence.typeAbsence">
                    <option value="Maladie">Maladie</option>
                    <option value="Congé">Congé</option>
                    <option value="Vacances">Vacances</option>
                </select>
            </div>
            <!-- Zone de texte pour la justification de l'absence -->
            <div class="mb-3">
                <label for="justificationAbsence" class="form-label">Justification de l'absence</label>
                <textarea class="form-control" id="justificationAbsence" v-model="absence.justificationAbsence"></textarea>
            </div>
            <!-- Bouton de soumission -->
            <button style="margin-right: 50px;" type="submit" class="btn btn-primary">Soumettre</button>
            
        </form>
    </main>
</template>

<script setup>
// Importer les fonctions et hooks nécessaires de Vue et d'autres services
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
// import useAbsence from '@/services/serviceAbsence';

// Déstructurer la fonction addAbsence du service useAbsence
// const { addAbsence } = useAbsence();
const router = useRouter();

// Définir un objet réactif pour contenir les données du formulaire
const absence = ref({
    dateDebutAbsence: null,
    dateFinAbsence: null,
    typeAbsence: null,
    justificationAbsence: null,
});

const url = "http://localhost:5000/api/absence/creer";
// Fonction pour gérer la soumission du formulaire
const soumettre = async() => {
    await axios.post(url,absence.value)
   .then(res => 
   {
   console.log("absence ajouté avec succes!")
   router.push("/")
   
   })
   .catch(error => console.log("echec d'ajout!"))

    // Remplir l'objet FormData avec les données du formulaire
    // for (let clef in absence.value) {
    //     formData.set(clef, absence.value[clef]);
    // }


    // Appeler la fonction addAbsence et gérer la réponse
    // addAbsence(formData)
    //     .then(res => {
    //         console.log(res);
    //         // Rediriger vers la page d'accueil en cas de succès
    //         router.push('/');
    //     })
    //     .catch(err => {
    //         console.log("Problème lors de l'ajout de l'absence", err);
    //     });
};
</script>
