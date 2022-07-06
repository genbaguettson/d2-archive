<template>
  <div class="base-background">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
    };
  },
});
</script>

<style>
html, body {
  margin: 0;
  font-size: 14px;
  font-family: 'Roboto', 'Fira Sans',sans-serif;
  line-height: 1.6;
}

.base-background {
  background-image: url('./assets/synthetik.jpg');
  background-position: center;
}

.damagetype-icon {
  width: 32px;
  height: 32px;
}

.perk-icon {
  width: 48px;
  height: 48px;
}

.row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.col-2 {
  width: 50%;
  min-width: 50%;
}

.perks .perk-icon, .content-indicator {
  margin-right: 5px;
}

.perks:last-child {
  margin-right: 0px;
}

.dropFrame {
  display: flex;
  flex-direction: row;
}

.pad-side-3 {
  padding: 0 3%;
}

.justify-text {
  text-align: justify
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0;
  padding-bottom: 0;
  color: #969696
}

p {
  margin-top: 0;
  padding-top: 0;
  overflow-wrap: break-word;
}
</style>
