<template>
  <p class="part-subtitle">
      {{title}}
  </p>
  <div class="info-divider"></div>
</template>

<script>
export default {
  props: ['title'],
  setup() {
    return {
    };
  },
};
</script>

<style scoped>

.part-subtitle {
  font-size: 12px;
  color: #6c6c6c;
}

.info-divider {
  width: 100%;
  height: 1.5px;
  background-color: #404040;
}

</style>
