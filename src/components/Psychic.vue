<template>
  <div class="card card--psychic 
    has-text-weight-bold 
    has-text-white">
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">👁️ Psychic 👁️</div>
        <router-link to="/mew">
          Mew
        </router-link><br>
        <router-link to="/alakazam">
          Alakazam
        </router-link><br>
        <router-link to="/mrmime">
          Mr. Mime
        </router-link><br>
        <router-link to="/jynx">
          Jynx
        </router-link><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PsychicTypeCard",
};
</script>
