<template>
  <n-button @click="showModal = true">
    Start me up scotty
  </n-button>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      :title="this.title"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <div v-for="perk in this.perks" :key="perk.name" class="perk-desc">
        <img
          :src="perk.icon.url"
          :alt="perk.name"
          :title="perk.name"
        />
        <div class="perk-details">
          <h4>
            {{ perk.name }}
          </h4>
          <p>
            Perk description here like idk uh who lives in a pineapple under the sea
          </p>
        </div>
      </div>
    </n-card>
  </n-modal>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['perks', 'title'],
  setup() {
    return {
      showModal: ref(false),
    };
  },
};
</script>
