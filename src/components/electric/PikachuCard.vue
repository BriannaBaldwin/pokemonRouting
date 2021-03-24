<template>
    <div class="card card--electric
    has-text-weight-bold
    has-text-white">
        <div class="card-image">
            <div class="card-image-container">
                <img src="../../../static/pikachu.png"/>
            </div>
        </div>
        <div class="card-content has-text-centered">
            <div class="main">
                <div class="title has-text-white">Pikachu</div>
                <div class="hp">hp 35</div>
            </div>
            <div class="stats columns is-mobile">
                <div class="column">⚡<br />
                  <span class="tag is-warning">Type</span>
                </div>
                <div class="column center-column">13.2 lbs<br>
                    <span class="tag is-warning">Weight</span>
                </div>
                <div class="column">0.4 m <br>
                  <span class="tag is-warning">Height</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PikachuCard",
};
</script>
