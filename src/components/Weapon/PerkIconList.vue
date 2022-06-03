<template>
  <img v-for="perk in this.perks"
                :key="perk.name" :src="perk.icon.url" :alt="perk.name"
                :title="perk.name">
</template>
<script>
export default {
  props: ['perks'],
};
</script>
<style scoped>
img {
  width: 48px;
  margin-right: 5px;
}

img:last-child {
  margin-right: 0;
}
</style>
