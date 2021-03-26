<template>
  <div class="card card--fire2 
    has-text-weight-bold 
    has-text-white">
    <div class="card-image">
      <div class="card-image-container">
        <img src="../../../static/arcanine.png" width="450" style="margin:10px 20px"/>
      </div>
    </div>
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">Arcanie</div>
        <div class="hp">hp 90</div>
      </div>
      <div class="stats columns is-mobile">
        <div class="column">🔥<br>
          <span class="tag is-warning">Type</span>
        </div>
        <div class="column center-column">341.7 lbs<br>
          <span class="tag is-warning">Weight</span>
        </div>
        <div class="column">1.9 m <br>
          <span class="tag is-warning">Height</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArcanineCard",
};
</script>
