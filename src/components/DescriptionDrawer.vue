<template>
  <n-button-group>
    <n-button @click="activate('right')">
      Right
    </n-button>
  </n-button-group>
  <n-drawer v-model:show="active" :width="502" :placement="placement">
    <n-drawer-content :title="this.title">
      <div class="drawer-content">
        <div class="perks-list">
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
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['perks', 'title'],
  setup() {
    const active = ref(false);
    const placement = ref('right');
    const activate = (place) => {
      active.value = true;
      placement.value = place;
    };
    return {
      active,
      placement,
      activate,
    };
  },
};
</script>

<style>
.drawer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.perks-list {
  display: flex;
  flex-direction: column;
}

.perk-desc {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.perk-details {
  margin-left: 10px;
}
</style>
