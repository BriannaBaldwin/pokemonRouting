<template>
  <div class="container">
    <div class="pokemon">
      <router-view></router-view>

      <div class="pokemon-links has-text-centered">
        <!-- 15 elemental types of pokemon...choose 5
        psychic -->
        <router-link to="/fire">
          Fire
        </router-link>
        <router-link to="/grass">
          Grass
        </router-link>
        <router-link to="/water">
          Water
        </router-link>
        <router-link to="/electric">
          Electric
        </router-link>
        <router-link to="/psychic">
          Psychic
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="css" src="./styles.css">
/* Styles from stylesheet */
</style>
