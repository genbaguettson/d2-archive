<template>
  <p class="part-subtitle" :class="{ 'white': white }">
      {{title}}
  </p>
  <div class="divider" :class="{ 'white': white }"/>
</template>

<script>
export default {
  props: ['title', 'white'],
};
</script>

<style scoped>

.part-subtitle {
  font-size: 12px;
  color: #6c6c6c;
}

.part-subtitle.white {
  color: white;
  transition: 0.5s linear;
}

.divider {
  width: 100%;
  height: 1.5px;
  background-color: #404040;
}

.divider.white {
  background-color: white;
  transition: 0.5s linear;
}

</style>
