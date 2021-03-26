<template>
  <div class="card card--water 
    has-text-weight-bold 
    has-text-white">
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">💧 Water 💧</div>
        <router-link to="/blastoise">
          Blastoise
        </router-link><br>
        <router-link to="/psyduck">
          Psyduck
        </router-link><br>
        <router-link to="/vaporeon">
          Vaporeon
        </router-link><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaterTypeCard",
};
</script>
