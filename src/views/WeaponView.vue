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
        <!--PVE DESCRIPTION-->
          <section v-if="weaponData.weapon.pveDescription" id="pveDescription">
            <h2>PVE Description</h2>
          <p> {{weaponData.weapon.pveDescription.text}} </p>
          </section>
          <!--Recommended PVE Perks-->
          <section v-if="weaponData.weapon.pvePerks" id="pvePerks">
            <h2>Recommended PVE Perks</h2>
          <div>
            <!--BARRELS-->
            <div class="row">
              <div class="col-2">
                <h2>Barrels</h2>
                <img class="perk-icon" v-for="perk in weaponData.weapon.pvePerks.perk1"
                :key="perk.name" :src="perk.icon.url" :alt="perk.name"
                :title="perk.name">
              </div>
              <div class="col-2">
                <h2>Explanation</h2>
              </div>
            </div>
            <!--Magazines-->
            <div class="row">
              <div class="col-2">
                <h2>Magazines</h2>
                <img class="perk-icon" v-for="perk in weaponData.weapon.pvePerks.perk2"
                :key="perk.name" :src="perk.icon.url" :alt="perk.name"
                :title="perk.name">
              </div>
              <div class="col-2">
                <h2>Explanation</h2>
              </div>
            </div>
            <!--3rd-->
            <div class="row">
              <div class="col-2">
                <h2>3rd Perk Slot</h2>
                <img class="perk-icon" v-for="perk in weaponData.weapon.pvePerks.perk3"
                :key="perk.name" :src="perk.icon.url" :alt="perk.name"
                :title="perk.name">
              </div>
              <div class="col-2">
                <h2>Explanation</h2>
              </div>
            </div>
            <!--4th-->
            <div class="row">
              <div class="col-2">
                <h2>4th Perk Slots</h2>
                <img class="perk-icon" v-for="perk in weaponData.weapon.pvePerks.perk4"
                :key="perk.name" :src="perk.icon.url" :alt="perk.name"
                :title="perk.name">
              </div>
              <div class="col-2">
                <h2>Explanation</h2>
              </div>
            </div>
            <!--ORIGIN TRAIT-->
            <div v-if="weaponData.weapon.originTrait" class="row">
              <div class="col-2">
                <h2>Origin Trait</h2>
                <img class="perk-icon"
                :src="weaponData.weapon.originTrait.icon.url"
                :alt="weaponData.weapon.originTrait.name"
                :title="weaponData.weapon.originTrait.name">
              </div>
              <div class="col-2">
                <h2>Explanation</h2>
              </div>
            </div>
          </div>
          </section>
          <!--Recommended PVE Godrolls-->
          <section v-if="weaponData.weapon.pveGodrolls" id="pveGodrolls">
            <h2>PVE Godrolls</h2>
            <div class="roll row"
            v-for="roll in weaponData.weapon.pveGodrolls" :key="roll.perk1.name">
            <div class="col-2">
              <div class="row">
                <img v-for="indicator in roll.contentIndicators" :key="indicator.icon.url"
                :src="indicator.icon.url" :alt="indicator.name"
                :title="indicator.name" class="perk-icon">
              </div>
              <hr>
              <div class="row">
                <img :src="roll.perk1.icon.url" :alt="roll.perk1.name"
                :title="roll.perk1.name" class="perk-icon">
                <img :src="roll.perk2.icon.url" :alt="roll.perk2.name"
                :title="roll.perk2.name" class="perk-icon">
                <img :src="roll.perk3.icon.url" :alt="roll.perk3.name"
                :title="roll.perk3.name" class="perk-icon">
                <img :src="roll.perk4.icon.url" :alt="roll.perk4.name"
                :title="roll.perk4.name" class="perk-icon">
              </div>
            </div>
            <div class="col-2">
              <h3>{{roll.title}}</h3>
              <p> {{roll.description.text}} </p>
            </div>
            </div>
          </section>
      </n-card>
    </div>
    <div v-else-if="weaponLoading">Loading...</div>
    <div v-else-if="weaponError">{{ error }}</div>
  </n-space>
</template>
<script>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default {
  props: ['name'],
  setup(props) {
    const { result, loading, error } = useQuery(gql`
        query ($name : String!){
          weapon(where: { name: $name }) {
            archetype {
              title
              rpm
              frame
            }
            name
            source{
              soureIcon{
                url
              },
              sourceTitle
            }
            element
            image {
              url
              fileName
            }
            originTrait {
              name
              icon {
                url
              }
            }
            pveDescription {
              text
            }
            pveGodrolls {
              ... on PveRoll {
                title
                description{text}
                perk1 {
                  name,
                  icon{url}
                }
                perk2 {
                  name,
                  icon{url}
                }
                perk3 {
                  name,
                  icon{url}
                }
                perk4 {
                  name,
                  icon{url}
                }
                contentIndicators{name,, icon{url}}
              }
            }
            pveMasterworks {
              icon {
                url
              }
              masterwork
            }
            pvePerks {
              perk1 {
                name,
                icon{url}
              }
              perk2 {
                name,
                icon{url}
              }
              perk3 {
                name,
                icon{url}
              }
              perk4 {
                name,
                icon{url}
              }
            }
            pvpDescription {
              text
            }
            pvpMasterworks {
              masterwork
              icon {
                url
              }
            }
            pvpPerks {
              perk1 {
                name,
                icon{url}
              }
              perk2 {
                name,
                icon{url}
              }
              perk3 {
                name,
                icon{url}
              }
              perk4 {
                name,
                icon{url}
              }
            }
          }
        }
      `, { name: props.name });
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
      console.log(elementType);
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
<style>
.n-card{
  color: white;
  font-family: v-mono, sans-serif;
}

.n-card-cover img {
  max-width: 700px;
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
}

.col-2 {
  width: 50%;
}

.roll {
  margin-bottom: 2em;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0;
  padding-bottom: 0;
  color: #969696
}

p{
  margin-top: 0;
  padding-top: 0;
  max-width: 200px;
}
hr {
  border-color: white;
  width: 70%;
  left: 0;
}
</style>
