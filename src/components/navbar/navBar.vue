<template>
  <div class="main-navbar-container">
    <div class="title-container">
      <div class="spacer" />
      <img class="engram" :src="engrams[getRandomInt(0, engrams.length)]" alt="engram"/>
      <h1 class="site-name">
        THE ARCHIVE
      </h1>
    </div>
    <div class="banner-container">
      <MarqueeText
        :content="funnyLines"
        :duration=60
        :repeat="4"
        reverse
        class="banner-marquee"
      >
        <span
          v-for="(line, index) in funnyLines"
          :key="index"
          class="banner-text"
        >
          {{line}}  //
        </span>
      </MarqueeText>
    </div>
  </div>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component';

const exoticEngram = require('@/assets/engrams/exoticEngram.png');
const legendaryEngram = require('@/assets/engrams/legendaryEngram.png');
const brightEngram = require('@/assets/engrams/brightEngram.png');
const primeEngram = require('@/assets/engrams/primeEngram.png');

export default {
  props: [],
  data() {
    return {
      engrams: [
        exoticEngram,
        legendaryEngram,
        brightEngram,
        primeEngram,
      ],
      funnyLines: [
        'I AM A GOD OF WAR AND WHEN I SEE YOUR ROLLS I WEEP',
        'FROM DUST UNTO GODROLLS',
        'WHEN YOU WERE PARTYING I WAS STUDYING THE ROLLS',
        'MAY YOUR FARM BE AS INFINITE AS YOUR SALT',
      ],
    };
  },
  methods: {
    getRandomInt(min, max) {
      const bruh = Math.floor(Math.random() * (max - min) + min);
      return bruh;
    },
  },
  components: {
    MarqueeText,
  },
};
</script>

<style scoped>

.main-navbar-container {
  display: flex;
  flex-direction: column;
  height: 10vh;
  background-color: #1e1e1e;
}

.title-container {
  display: flex;
  height: 80%;
  width: 100%;
  align-items: center;
}

.engram {
  height: 80%;
  z-index: 1;
}

.spacer {
  width: 15px;
}

.site-name {
  display: flex;
  align-items: center;
  font-family: 'Orbitron';
  font-size: 40px;
  margin: 0;
  margin-left: 15px;
}

.banner-container {
  display: flex;
  height: 25%;
  width: 100%;
  background: linear-gradient(90deg, #850E4D 0%, #633A96 50%, #68B6CC 100%);
}

.banner-marquee {
  line-height: 15px;
}

.banner-text {
  margin-left: 2px;
  font-family: 'Orbitron';
}

</style>
