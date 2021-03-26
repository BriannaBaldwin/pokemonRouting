<template>
  <div class="card card--electric 
    has-text-weight-bold 
    has-text-white">
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">⚡ Electric ⚡</div>
        <router-link to="/pikachu">
          Pikachu
        </router-link><br>
        <router-link to="/zapdos">
          Zapdos
        </router-link><br>
        <router-link to="/jolteon">
          Jolteon
        </router-link><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElectricTypeCard",
};
</script>
