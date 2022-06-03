<template>
  <n-space justify="center">
    <div v-if="weaponData && weaponData.weapon" class="weapon">
      <n-card :title="weaponData.weapon.name">
        <template #header-extra>
          <img v-if="weaponData.weapon.source"
          class="source-icon" :src="weaponData.weapon.source.soureIcon.url"
          :title="'Source: ' + weaponData.weapon.source.sourceTitle"
          :alt="'Source: ' + weaponData.weapon.source.sourceTitle" />

          <img v-if="weaponData.weapon.element"
          class="damagetype-icon" :src="getDamageIcon(weaponData.weapon.element)"
          :title="'Damage Type: '+ weaponData.weapon.element"
          :alt="'Damage Type: '+ weaponData.weapon.element" />
        </template>
        <template #cover>
          <img v-if="weaponData.weapon.image"
            :src="weaponData.weapon.image.url"
            :alt="'Thumbnail of ' + weaponData.weapon.name"
          />
        </template>
        <!--PVE-->
        <GamemodeSection pve="true" :weapon="weaponData.weapon" />
        <!--PVP-->
        <GamemodeSection :weapon="weaponData.weapon" />
      </n-card>
    </div>
    <div v-else-if="weaponLoading">Loading...</div>
    <div v-else-if="weaponError">{{ error }}</div>
  </n-space>
  <div v-if="weaponData && !weaponData.weapon">
  {{ this.$router.push({ name: 'notFound' }) }}
  </div>
</template>
<script>
import { useQuery } from '@vue/apollo-composable';
import GamemodeSection from '../components/Weapon/GamemodeSection.vue';
import GET_WEAPON_BY_NAME from '../data/queries';

export default {
  props: ['name'],
  setup(props) {
    const { result, loading, error } = useQuery(GET_WEAPON_BY_NAME, { name: props.name });
    return {
      weaponData: result,
      weaponLoading: loading,
      weaponError: error,
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
    GamemodeSection,
  },
};
</script>
<style>
.n-card{
  color: white;
  font-family: v-mono, sans-serif;
  max-width: 800px;
}

.n-card-cover img {
  height: auto;
}

.damagetype-icon {
  width: 32px;
  height: 32px;
}

.source-icon {
  width: 60px;
  height: 60px;
}

.perk-icon {
  width: 48px;
  height: 48px;
}

.n-card-header__main{
  font-family: v-mono, sans-serif !important;
  font-size: 2em;
}

.n-card-content {
  display: flex;
}

.row {
  width: 100%;
  display: flex;
   flex-wrap: wrap;
}

.col-2 {
  width: 50%;
  min-width: 50%;
}

.roll {
  margin-bottom: 2em;
}

.perks .perk-icon, .content-indicator {
  margin-right: 5px;
}

.perks:last-child {
  margin-right: 0px;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0;
  padding-bottom: 0;
  color: #969696
}

p{
  margin-top: 0;
  padding-top: 0;
  overflow-wrap: break-word;
}
hr {
  border-color: white;
  width: 70%;
  left: 0;
}
</style>
