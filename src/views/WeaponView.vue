<template>
  <div v-if="weaponData && weaponData.weapon" class="main-container">
    <div class="weapon">
      <div class="base-info">
        <MainInfoView :weapon="weaponData.weapon" />
        <div class="additional-info-box">
          <StatsContainer title="Stats" :stats="weaponStats" color="red"/>
          <div class="additional-info-div">
            <AdditionalInfoView
              title="Intrinsic"
              :text="weaponData.weapon.archetype.frame"
              subtext="I am the Sea"
              :iconUrl="weaponData.weapon.source.soureIcon.url"
            />
            <AdditionalInfoView
              title="Source"
              :text="weaponData.weapon.source.sourceTitle"
              subtext="Poop Encounter"
              :iconUrl="weaponData.weapon.source.soureIcon.url"
            />
          </div>
        </div>
      </div>
      <TabsDisplay :tabs="['PVE', 'PVP']"></TabsDisplay>
      <!-- <GamemodeSection pve="true" :weapon="weaponData.weapon" />
      <GamemodeSection :weapon="weaponData.weapon" /> -->
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
// import GamemodeSection from '@/components/GamemodeSection.vue';
import MainInfoView from '@/components/weaponInfo/WeaponMainInfo.vue';
import AdditionalInfoView from '@/components/weaponInfo/WeaponAdditionalInfo.vue';
import StatsContainer from '@/components/weaponInfo/WeaponStats.vue';
import GET_WEAPON_BY_NAME from '@/data/queries';
import TabsDisplay from '@/components/layouts/TabsDisplay.vue';

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
    // GamemodeSection,
    MainInfoView,
    AdditionalInfoView,
    StatsContainer,
    TabsDisplay,
  },
};
</script>

<style scoped>

.main-container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.weapon {
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  width: 80%;
  padding: 20px 0;
}

.base-info {
  padding: 0 30px;
}

.additional-info-box {
  display: flex;
  flex-direction: row;
}

.additional-info-div {
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

</style>
