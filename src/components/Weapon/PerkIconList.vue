<template>
  <n-popover trigger="hover" v-for="perk in this.perks" :key="perk.name">
    <template #trigger>
      <img
        :src="perk.icon.url"
        :alt="perk.name"
        :title="perk.name"
      />
    </template>
    <div class="perk-popover">
      <img
        :src="perk.icon.url"
        :alt="perk.name"
        :title="perk.name"
      />
      <div>
        <h3 class="title-popover">{{perk.name}}</h3>
        <p>
          Perk description here like idk uh who lives in a pineapple under the sea
        </p>
      </div>
    </div>
  </n-popover>
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
img {
  width: 48px;
  height: 48px;
  margin-right: 5px;
}

img:last-child {
  margin-right: 0;
}

.perk-popover {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
