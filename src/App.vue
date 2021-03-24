<template>
  <div class="container">
    <div class="pokemon">
      <router-view></router-view>

      <div class="pokemon-links has-text-centered">
        <!-- 15 elemental types of pokemon...choose 5
        water, fire, grass, psychic, electric, flying-->
        <router-link to="/blastoise">
          /blastoise
        </router-link>
        <router-link to="/venusaur">
          /venusaur
        </router-link>
        <router-link to="/pikachu">
          /pikachu
        </router-link>
        <router-link to="/fire">
          Fire
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
