<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Presence Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Menu</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Retards
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><RouterLink class="dropdown-item" to="/ajout-retard">Ajout</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink class="dropdown-item" to="/liste-retard">Liste</RouterLink></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Congés
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><RouterLink class="dropdown-item" to="/ajout-Conge">Ajout</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink class="dropdown-item" to="/liste-conge">Liste</RouterLink></li>
          </ul>
        </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Absences
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><RouterLink class="dropdown-item" to="/ajoutAbsence">Ajout</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink class="dropdown-item" to="/listeAbsence">Liste</RouterLink></li>
          </ul>
        </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rapports
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><RouterLink class="dropdown-item" to="/ajout-rapport">Ajout</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink class="dropdown-item" to="/liste-rapport">Liste</RouterLink></li>
          </ul>
        </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Employe
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><RouterLink class="dropdown-item" to="/ajout-employe">Ajout</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink class="dropdown-item" to="/liste-employe">Liste</RouterLink></li>
          </ul>
        </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Types
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><RouterLink class="dropdown-item" to="/ajout-type">Ajout</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink class="dropdown-item" to="/liste-type">Liste</RouterLink></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    name: 'Home'
}
</script>

<style scoped>
.container {
    margin-top: 20px;
}
</style>