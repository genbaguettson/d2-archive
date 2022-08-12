<template>
  <div
    v-if="weaponData && weaponData.weapon"
    class="main-container"
  >
    <div class="square-nav-bar">
      <SquareDisplay v-model="activeIndex" :tabs="tabs"/>
    </div>
    <div class="tab-display">
      <WeaponMainInfo :weapon="weaponData.weapon"/>
      <component :is="tabs[activeIndex].name" :weapon="weaponData.weapon"/>
    </div>
  </div>
  <div v-else-if="weaponLoading">Loading...</div>
  <div v-else-if="weaponError">{{ error }}</div>
  <div v-if="weaponData && !weaponData.weapon">
    <p style="color: white">
      WD: {{ weaponData }} WL: {{ weaponLoading }} WE: {{ weaponError }}
    </p>
    <!-- {{ this.$router.push({ name: 'notFound' }) }} -->
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import GET_WEAPON_BY_NAME from '@/data/queries';
import SquareDisplay from '@/components/layouts/SquareDisplay.vue';
import WeaponMainInfo from '@/components/weaponInfo/WeaponMainInfo.vue';

import OverviewTab from '@/components/tabs/OverviewTab.vue';
import PveTab from '@/components/tabs/PveTab.vue';
import PvpTab from '@/components/tabs/PvpTab.vue';
import FullscreenTab from '@/components/tabs/FullscreenTab.vue';

const generalIcon = require('@/assets/generalIcon.png');
const pveIcon = require('@/assets/pveIcon.png');
const pvpIcon = require('@/assets/pvpIcon.png');
const fullscreenIcon = require('@/assets/fullscreenIcon.png');

export default {
  props: ['name'],
  setup(props) {
    const { result, loading, error } = useQuery(GET_WEAPON_BY_NAME, {
      name: props.name,
    });
    return {
      weaponData: result,
      weaponLoading: loading,
      weaponError: error,
    };
  },
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          name: 'OverviewTab',
          iconUrl: generalIcon,
        },
        {
          name: 'PveTab',
          iconUrl: pveIcon,
        },
        {
          name: 'PvpTab',
          iconUrl: pvpIcon,
        },
        {
          name: 'FullscreenTab',
          iconUrl: fullscreenIcon,
        },
      ],
    };
  },
  components: {
    WeaponMainInfo,
    SquareDisplay,
    OverviewTab,
    PveTab,
    PvpTab,
    FullscreenTab,
  },
};
</script>

<style scoped>

.main-container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.square-nav-bar {
  display: flex;
  justify-content: center;
  padding: 30px 20px;
}

.tab-display {
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  width: 100%;
  padding: 20px 30px;
}

</style>
