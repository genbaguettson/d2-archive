<template>
  <n-space justify="center">
    <div v-if="weaponData && weaponData.weapon" class="weapon">
      <n-card :title="weaponData.weapon.name">
        <template #cover>
          <img
            v-if="weaponData.weapon.image"
            :src="weaponData.weapon.image.url"
            :alt="'Thumbnail of ' + weaponData.weapon.name"
          />
        </template>
        <template #header-extra>
          <img
            v-if="weaponData.weapon.element"
            class="damagetype-icon"
            :src="getDamageIcon(weaponData.weapon.element)"
            :title="'Damage Type: ' + weaponData.weapon.element"
            :alt="'Damage Type: ' + weaponData.weapon.element"
          />
        </template>
        <div>
          <h2>Drops From:</h2>
          <div class="dropFrame pad-side-3">
            <img
              v-if="weaponData.weapon.source"
              class="source-icon"
              :src="weaponData.weapon.source.soureIcon.url"
              :title="'Source: ' + weaponData.weapon.source.sourceTitle"
              :alt="'Source: ' + weaponData.weapon.source.sourceTitle"
            />
            <h3>
              {{ weaponData.weapon.source.sourceTitle }}
            </h3>
          </div>
        </div>
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
    <p style="color: white">
      WD: {{ weaponData }} WL: {{ weaponLoading }} WE: {{ weaponError }}
    </p>
    <!-- {{ this.$router.push({ name: 'notFound' }) }} -->
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import GamemodeSection from '../components/Weapon/GamemodeSection.vue';
import GET_WEAPON_BY_NAME from '../data/queries';

export default {
  props: ['name'],
  setup(props) {
    const { result, loading, error } = useQuery(GET_WEAPON_BY_NAME, {
      name: props.name,
    });
    console.log(result);
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
