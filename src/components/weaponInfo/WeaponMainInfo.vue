<template>
  <div>
    <SectionTitle title="Legendary Weapon" />
    <div class="info-box">
      <img
          v-if="weapon.image"
          :src="thumbnail"
          :alt="'Thumbnail of ' + weapon.name"
          class="weapon-thumbnail"
        />
      <div class="main-info-box">
        <h2 class="weapon-name">
          {{ weapon.name }}
        </h2>
        <p class="weapon-type">
          {{ weapon.archetype.title }} RPM
        </p>
      </div>
      <div class="additional-info-container">
        <div class="additional-info-box">
          <img
            v-if="weapon.element"
            class="additional-info-icon"
            :src="getDamageIcon(weapon.element)"
            :title="'Damage Type: ' + weapon.element"
            :alt="'Damage Type: ' + weapon.element"
          />
          <p class="additional-info-text">
            Energy Affinity
          </p>
        </div>
        <div class="additional-info-box">
          <img
            class="additional-info-icon"
            :src="ammoPrimary"
            alt="ammo type"
          />
          <p class="additional-info-text">
            Ammo Type
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../layouts/SectionTitle.vue';

const ammoPrimary = require('@/assets/ammoPrimary.png');
const thumbnail = require('@/assets/TMPEyaslunaTN.jpg');

export default {
  props: ['weapon'],
  data() {
    return {
      DMG_IMG_URL: {
        STASIS: 'https://media.graphassets.com/My7R32nKQ3uF3gUA7JBE',
        SOLAR: 'https://media.graphassets.com/i2nLrkqVTMyVNOvv06tX',
        ARC: 'https://media.graphassets.com/1UMeBZYKQpKMVQD9OI4u',
        KINETIC: 'https://media.graphassets.com/uAfCSEA9Ryi8nCC0HDim',
        VOID: 'https://media.graphassets.com/eTxoUE78QEuQ4olgnqXd',
      },
      ammoPrimary,
      thumbnail,
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
    SectionTitle,
  },
};
</script>

<style scoped>

.info-box {
  display: flex;
  flex-direction: row;
  padding: 15px 10px;
}

.weapon-thumbnail {
  width: 60px;
  height: 60px;
}

.main-info-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 15px;
}

.weapon-name {
  margin-top: 0;
  color: white;
  font-weight: 400;
}

.weapon-type {
  margin-bottom: 0;
  color: #737373;
  font-weight: 600;
}

.additional-info-container {
  display: flex;
  flex-direction: row;
}

.additional-info-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
}

.additional-info-icon {
  width: 30px;
  height: 30px;
}

.additional-info-text {
  margin-top: 5px;
  color: white;
  font-size: 12px;
}
</style>
