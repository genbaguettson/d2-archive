<template>
  <div>
    <p class="weapon-rarity">
      Legendary Weapon
    </p>
    <div class="main-info-divider"></div>
    <div class="info-box">
      <img
          v-if="weapon.image"
          :src="weapon.image.url"
          :alt="'Thumbnail of ' + weapon.name"
          class="weapon-thumbnail"
        />
      <div class="main-info-box">
        <h2 class="weapon-name">
          Mall Ninja Katana
        </h2>
        <p class="weapon-type">
          Slugger
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
            src="https://www.svgrepo.com/show/358797/ammo-special.svg"
            alt="this is the ammo picture"
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
export default {
  props: ['weapon'],
  setup() {
    return {
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
};
</script>

<style scoped>
  .weapon-rarity {
    font-size: 12px;
    color: #6c6c6c;
  }

  .main-info-divider {
    width: 100%;
    height: 1.5px;
    background-color: #404040;
  }

  .weapon-thumbnail {
    width: 60px;
    height: 60px;
  }

  .info-box {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
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

  p {
    margin: 0;
  }
</style>
