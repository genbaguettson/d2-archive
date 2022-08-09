<template>
  <div>
    <WeaponMainInfo :weapon="weaponData"/>
    <div class="additional-info-box">
      <WeaponStats title="Stats" :stats="weaponStats"/>
      <div class="additional-info-div">
        <WeaponAdditionalInfo
          title="Intrinsic"
          :text="weaponData.archetype.frame"
          subtext="I am the Sea"
          :iconUrl="weaponData.source.soureIcon.url"
        />
        <WeaponAdditionalInfo
          title="Source"
          :text="weaponData.source.sourceTitle"
          subtext="Poop Encounter"
          :iconUrl="weaponData.source.soureIcon.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WeaponMainInfo from '@/components/weaponInfo/WeaponMainInfo.vue';
import WeaponAdditionalInfo from '@/components/weaponInfo/WeaponAdditionalInfo.vue';
import WeaponStats from '@/components/weaponInfo/WeaponStats.vue';

export default {
  props: ['weaponData'],
  setup() {
    return {
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
      activeTab: null,
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
    WeaponMainInfo,
    WeaponAdditionalInfo,
    WeaponStats,
  },
};
</script>

<style scoped>

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
