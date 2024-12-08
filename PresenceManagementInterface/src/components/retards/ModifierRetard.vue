<template>
    <main>
        <h1>Modifier le retard</h1>
        <!-- Formulaire pour modifier les détails du retard -->
        <form @submit.prevent="soumettre" enctype="multipart/form-data">
            <!-- Champ pour la date du retard -->
            <div class="mb-3">
                <label for="dateRetard" class="form-label">Date du retard</label>
                <input type="date" class="form-control" id="dateRetard" v-model="retard.dateRetard">
            </div>
            <!-- Champ pour l'heure de début du retard -->
            <div class="mb-3">
                <label for="heureDebutRetards" class="form-label">Heure de début</label>
                <input type="time" class="form-control" id="heureDebutRetards" v-model="retard.heureDebutRetards">
            </div>
            <!-- Champ pour l'heure de fin du retard -->
            <div class="mb-3">
                <label for="heureFinRetards" class="form-label">Heure de fin</label>
                <input type="time" class="form-control" id="heureFinRetards" v-model="retard.heureFinRetards">
            </div>
            <!-- Champ pour la justification du retard -->
            <div class="mb-3">
                <label for="justificationRetard" class="form-label">Justification</label>
                <textarea class="form-control" id="justificationRetard" v-model="retard.justificationRetard"></textarea>
            </div>
            <!-- Bouton pour soumettre le formulaire -->
            <button type="submit" class="btn btn-primary">Mettre à jour</button>
        </form>
    </main>
</template>

<script setup>
// Importation des hooks et fonctions nécessaires de Vue et Vue Router
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useRetard from '@/services/serviceRetard';

// Récupération des fonctions pour obtenir et mettre à jour un retard
const { getRetardById, updateRetard } = useRetard();

// Initialisation des instances de router et route
const router = useRouter();
const route = useRoute();
const { id } = route.params;

// Définition de l'objet retard avec des valeurs par défaut
const retard = ref({
    dateRetard: null,
    heureDebutRetards: null,
    heureFinRetards: null,
    justificationRetard: null,
});

// Fonction pour soumettre le formulaire et mettre à jour le retard
const soumettre = async () => {
    try {
        await updateRetard(id, retard.value);
        router.push({ name: 'RetardsList' });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du retard:', error);
    }
};

// Récupération des détails du retard avant le montage du composant
onBeforeMount(() => {
    getRetardById(id)
        .then(res => retard.value = res.data)
        .catch(error => console.error('Erreur lors de la récupération du retard:', error));
});
</script>