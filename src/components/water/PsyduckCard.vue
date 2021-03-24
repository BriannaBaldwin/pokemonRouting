<template>
  <div class="card card--water has-text-weight-bold has-text-white">
    <div class="card-image">
      <div class="card-image-container">
        <img src="../../../static/psyduck.png" width="300px" style="margin: 0px 30px"/>
      </div>
    </div>
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">Psyduck</div>
        <div class="hp">hp 50</div>
      </div>
      <div class="stats columns is-mobile">
        <div class="column">
          💧👁️<br />
          <span class="tag is-light">Type</span>
        </div>
        <div class="column center-column">
          43.2 lbs<br />
          <span class="tag is-light">Weight</span>
        </div>
        <div class="column">
          0.8 m<br />
          <span class="tag is-light">Height</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PsyduckCard"
};
</script>
