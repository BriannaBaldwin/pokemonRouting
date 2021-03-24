<template>
  <div class="card card--psychic 
    has-text-weight-bold 
    has-text-white">
    <div class="card-image">
      <div class="card-image-container">
        <img src="../../../static/mew.png"/>
      </div>
    </div>
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">Mew</div>
        <div class="hp">hp 100</div>
      </div>
      <div class="stats columns is-mobile">
        <div class="column">👁️<br>
          <span class="tag is-danger">Type</span>
        </div>
        <div class="column center-column">8.8 lbs<br>
          <span class="tag is-danger">Weight</span>
        </div>
        <div class="column">0.4 m <br>
          <span class="tag is-danger">Height</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MewCard",
};
</script>
