<template>
  <div class="card card--psychic 
    has-text-weight-bold 
    has-text-white">
    <div class="card-image">
      <div class="card-image-container">
        <img src="../../../static/mrMime.png" style="margin:20px -10px" />
      </div>
    </div>
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">Mr. Mime</div>
        <div class="hp">hp 40</div>
      </div>
      <div class="stats columns is-mobile">
        <div class="column">👁️<br>
          <span class="tag is-danger">Type</span>
        </div>
        <div class="column center-column">120.2 lbs<br>
          <span class="tag is-danger">Weight</span>
        </div>
        <div class="column">1.3 m <br>
          <span class="tag is-danger">Height</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MrMimeCard",
};
</script>
