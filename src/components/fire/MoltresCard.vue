<template>
  <div class="card card--fire2 
    has-text-weight-bold 
    has-text-white">
    <div class="card-image">
      <div class="card-image-container">
        <img src="../../../static/moltres.png" width="450" style="margin:100px 20px"/>
      </div>
    </div>
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">Moltres</div>
        <div class="hp">hp 90</div>
      </div>
      <div class="stats columns is-mobile">
        <div class="column">🔥<br>
          <span class="tag is-warning">Type</span>
        </div>
        <div class="column center-column">132.3 lbs<br>
          <span class="tag is-warning">Weight</span>
        </div>
        <div class="column">2.0 m <br>
          <span class="tag is-warning">Height</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoltresCard",
};
</script>
