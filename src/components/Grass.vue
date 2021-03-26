<template>
  <div class="card card--grass 
    has-text-weight-bold 
    has-text-white">
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">🍃 Grass 🍃</div>
        <router-link to="/venusaur">
          Venusaur
        </router-link><br>
        <router-link to="/tangela">
          Tangela
        </router-link><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrassTypeCard",
};
</script>
