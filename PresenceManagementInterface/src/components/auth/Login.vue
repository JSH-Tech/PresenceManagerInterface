<template>
    <main>
        <form @submit.prevent="connecter">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="loginInfo.email">
            </div>
            <div class="mb-3">
                <label for="mdp" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="mdp" v-model="loginInfo.mot_de_passe">
            </div>
            <button type="submit" class="btn btn-primary">Se connecter</button>
            <RouterLink to="/add-user">Nouveau? Creer un compte.</RouterLink>
        </form>
    </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from '@/services/auth/serviceAuth';
import useAuthStore from '@/stores/auth/authStore';

const { login } = useAuth();
const { setUser, setToken } = useAuthStore();

const loginInfo = ref({
    email: null,
    mot_de_passe: null
});

const router = useRouter();

const connecter = () => {
    login(loginInfo.value).then(res => {
        setToken(res.token);
        setUser(res.data);
        router.push('/');
    }).catch(err => {
        const backendErrors = err.response.data.errors;
        const backendError = {};

        for (let error of backendErrors) {
            backendError[error.path] = error.msg;
        }

        erreurs.value = { ...erreurs.value, ...backendError };
        router.push('/login');
        console.log('Erreur connexion', err);
    });
};
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>