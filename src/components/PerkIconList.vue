<template>
  <div class="perk-list">
    <img
      v-for="perk in this.perks" :key="perk.name"
      :src="perk.icon.url"
      :alt="perk.name"
      :title="perk.name"
    />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['perks'],
  setup() {
    return {
      showPopover: ref(false),
    };
  },
};
</script>

<style scoped>
.perk-list {
  display: flex;
  flex-direction: row;
}

img {
  width: 48px;
  height: 48px;
  margin-right: 5px;
}

img:last-child {
  margin-right: 0;
}
</style>
