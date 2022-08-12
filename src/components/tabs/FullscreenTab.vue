<template>
  <div class="image-container">
    <img
      :src="weapon.image.url"
      :alt="weapon.name"
      class="weapon-image"
    />
  </div>
</template>

<script>

export default {
  props: ['weapon'],
};
</script>

<style scoped>

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.weapon-image {
  height: 75vh;
  max-width: 100%;
  object-fit: contain;
}

</style>
