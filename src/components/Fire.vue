<template>
  <div class="card card--fire 
    has-text-weight-bold 
    has-text-white">
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">🔥 Fire 🔥</div>
        <router-link to="/charizard">
          Charizard
        </router-link><br>
        <router-link to="/ninetails">
          Ninetails
        </router-link><br>
        <router-link to="/flareon">
          Flareon
        </router-link><br>
        <router-link to="/moltres">
          Moltres
        </router-link><br>
        <router-link to="/arcanine">
          Arcanine
        </router-link><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FireTypeCard",
};
</script>
