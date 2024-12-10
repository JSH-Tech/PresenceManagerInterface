<template>
    <main>
        <h1>Liste des absences</h1>
        <!-- Tableau des absences -->
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Date de début</th>
                    <th scope="col">Date de fin</th>
                    <th scope="col">Type d'absence</th>
                    <th scope="col">Justification</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- Boucle pour afficher chaque absence -->
                <tr v-for="absence in absences" :key="absence.idAbsence">
                    <td>{{ absence.dateDebutAbsence }}</td>
                    <td>{{ absence.dateFinAbsence }}</td>
                    <td>{{ absence.typeabsence }}</td>
                    <td>{{ absence.justificationAbsence }}</td>
                    <td>
                        <!-- Boutons pour modifier et supprimer l'absence -->
                        <button @click="modifier(absence.idAbsence)" class="btn btn-warning" style="margin-right: 30px;">Modifier</button>
                        <button @click="supprimer(absence.idAbsence)" class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>


<script setup>
// Importer les fonctions et hooks nécessaires de Vue et d'autres services
import { ref, onMounted, onBeforeMount } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

// Déstructurer les fonctions pour récupérer, supprimer et modifier une absence
// const { getAbsences, deleteAbsence } = useAbsence();
const router = useRouter();

// Définir un tableau réactif pour stocker la liste des absences
const absences = ref([]);
const url='http://localhost:5000/api/absence/obtenirAbsence';

onBeforeMount(() =>{
    chargerAbsences()
})

// Fonction pour récupérer la liste des absences
const chargerAbsences = async () => {
   await axios.get(url)
   .then(res=>{
    absences.value=res.data
   })
   .catch(error=>console.log('erreur',error))
};

// Fonction pour rediriger vers la page de modification d'une absence
const modifier = (id) => {
    router.push('/modifierAbsence/'+id);
};

     
// Fonction pour supprimer une absence

const supprimer = async (id) => {
    const url1='http://localhost:5000/api/absence/supprimerAbsence/'+id
    
  const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette absence?");
  if (confirmation) {
      try {
        await axios.delete(url1);
     
      console.log("Absence supprimée avec succès!");
      chargerAbsences()
    } catch (err) {
      console.log("Erreur lors de la suppression de l'absence:", err);
    }
  }

};

</script>
