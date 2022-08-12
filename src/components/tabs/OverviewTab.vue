<template>
  <div>
    <div class="additional-info-box">
      <WeaponStats title="Stats" :stats="weaponStats"/>
      <div class="additional-info-div">
        <WeaponAdditionalInfo
          title="Intrinsic"
          :text="weapon.archetype.frame"
          subtext="A well-rounded grip, reliable and sturdy."
          iconUrl="https://www.bungie.net/common/destiny2_content/icons/ad56b0e83d31592d9984cdf2f392452a.png"
        />
        <WeaponAdditionalInfo
          title="Source"
          :text="weapon.source.sourceTitle"
          subtext="Captain Avarokk the Covetous encounter"
          :iconUrl="weapon.source.soureIcon.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WeaponAdditionalInfo from '@/components/weaponInfo/WeaponAdditionalInfo.vue';
import WeaponStats from '@/components/weaponInfo/WeaponStats.vue';

export default {
  props: ['weapon'],
  setup() {
    return {
      // TEMPORARY STATS FOR STAT VIEW
      weaponStats: {
        Impact: 84,
        Range: 51,
        Stability: 64,
        Handling: 49,
        'Reload Speed': 45,
        'Aim Assistance': 80,
        'Airborne Effectiveness': 10,
        Zoom: 14,
        'Rounds Per Minute': 140,
        Magazine: 11,
        'Recoil Direction': 96,
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
