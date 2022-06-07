<template>
  <img
    v-for="indicator in this.indicators"
    :key="indicator.icon.url"
    :src="indicator.icon.url"
    :alt="indicator.name"
    :title="indicator.name"
    :width="indicator.icon.width * (40 / indicator.icon.height)"
  />
</template>

<script>
export default {
  props: ['indicators'],
};
</script>
