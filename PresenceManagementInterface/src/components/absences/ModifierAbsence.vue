<template>
    <main>
        <h1>Modifier l'absence</h1>
        <form @submit.prevent="soumettre(absence.idAbsence)">
            <div class="mb-3">
                <label for="dateDebutAbsence" class="form-label">Date de début</label>
                <input type="date" class="form-control" id="dateDebutAbsence" v-model="absence.dateDebutAbsence">
            </div>
            <div class="mb-3">
                <label for="dateFinAbsence" class="form-label">Date de fin</label>
                <input type="date" class="form-control" id="dateFinAbsence" v-model="absence.dateFinAbsence">
            </div>
            <div class="mb-3">
                <label for="typeabsence" class="form-label">Type d'absence</label>
                <select class="form-control" id="typeabsence" v-model="absence.typeabsence">
                    <option value="Maladie">Maladie</option>
                    <option value="Congé">Congé</option>
                    <option value="Vacances">Vacances</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="justificationAbsence" class="form-label">Justification</label>
                <textarea class="form-control" id="justificationAbsence" v-model="absence.justificationAbsence"></textarea>
            </div>
            <button  type="submit" class="btn btn-primary" style="margin-right: 50px;">Soumettre</button>
            <button type="submit" class="btn btn-primary">Annuler</button>
        </form>
    </main>
</template>


<script setup>
// Importer les fonctions et hooks nécessaires de Vue et d'autres services
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';


// Déstructurer les fonctions nécessaires
// const { getAbsence, updateAbsence } = useAbsence();
const router = useRouter();
const route = useRoute();

// Définir un objet réactif pour l'absence à modifier
const absence = ref({
    dateDebutAbsence: null,
    dateFinAbsence: null,
    typeabsence: null,
    justificationAbsence: null,
});


// Charger l'absence lors du montage du composant

onBeforeMount(() =>{
    const {id} = route.params
    chargerAbsence(id)
})

// Fonction pour récupérer la liste d'une absence par son id
const chargerAbsence = async (id) => {
    const url='http://localhost:5000/api/absence/obtenirAbsenceParId/'+id;
   await axios.get(url)
   .then(res=>{
    absence.value=res.data
   })
   .catch(error=>console.log('erreur',error))
};
// Fonction pour soumettre la modification
   const soumettre = async (id) => {
     const url1='http://localhost:5000/api/absence/mettreAJourAbsence/'+id
    await axios.put(url1,absence.value)
   .then(res => 
   {
   console.log("Absence modifier avec succes!")
   router.push('/listeAbsence') 
   })
   .catch(error => console.log("Echec de mise à jour de l'absence"))
};



</script>
