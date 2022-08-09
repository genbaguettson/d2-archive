<template>
  <div
    v-if="weaponData && weaponData.weapon"
    class="main-container"
  >
    <div class="square-nav-bar">
      <SquareDisplay v-model="activeIndex" :tabs="tabs"/>
    </div>
    <div class="tab-display">
      <component :is="tabs[activeIndex].name" :weaponData="weaponData.weapon"/>
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

import OverviewTab from '@/components/tabs/OverviewTab.vue';
import PveTab from '@/components/tabs/PveTab.vue';
import PvpTab from '@/components/tabs/PvpTab.vue';

const generalIcon = require('@/assets/generalIcon.png');
const pveIcon = require('@/assets/otherPveIcon.png');
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
      // TEMPORARY STATS FOR STAT VIEW
      weaponStats: {
        Impact: 29,
        Range: 58,
        Stability: 46,
        Handling: 56,
        'Reload Speed': 54,
        'Aim Assistance': 38,
        'Airborne Effectiveness': 17,
        Zoom: 17,
        'Rounds Per Minute': 450,
        Magazine: 44,
        'Recoil Direction': 61,
      },
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
      DMG_IMG_URL: {
        STASIS: 'https://media.graphassets.com/My7R32nKQ3uF3gUA7JBE',
        SOLAR: 'https://media.graphassets.com/i2nLrkqVTMyVNOvv06tX',
        ARC: 'https://media.graphassets.com/1UMeBZYKQpKMVQD9OI4u',
        KINETIC: 'https://media.graphassets.com/uAfCSEA9Ryi8nCC0HDim',
        VOID: 'https://media.graphassets.com/eTxoUE78QEuQ4olgnqXd',
      },
    };
  },
  methods: {
    getDamageIcon(elementType) {
      switch (elementType) {
        case 'Solar':
          return this.DMG_IMG_URL.SOLAR;
        case 'Stasis':
          return this.DMG_IMG_URL.STASIS;
        case 'Arc':
          return this.DMG_IMG_URL.ARC;
        case 'Void':
          return this.DMG_IMG_URL.VOID;
        default:
          return this.DMG_IMG_URL.KINETIC;
      }
    },
  },
  components: {
    SquareDisplay,
    OverviewTab,
    PveTab,
    PvpTab,
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
