<template>
  <div class="card card--grass has-text-weight-bold has-text-white">
    <div class="card-image">
      <div class="card-image-container">
        <img src="../../../static/vileplume.png" width="435" style="margin:0px 45px" />
      </div>
    </div>
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">Vileplume</div>
        <div class="hp hp-grass">hp 75</div>
      </div>
      <div class="stats columns is-mobile">
        <div class="column">
          🍃<br />
          <span class="tag is-success">Type</span>
        </div>
        <div class="column center-column">
          41.0 lbs<br />
          <span class="tag is-success">Weight</span>
        </div>
        <div class="column">
          1.2 m<br />
          <span class="tag is-success">Height</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VileplumeCard"
};
</script>
