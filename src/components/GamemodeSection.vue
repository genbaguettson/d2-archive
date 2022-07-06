<template>
  <!--DESCRIPTION-->
  <section
    v-if="this.description"
    :id="this.mode.toLowerCase() + 'Description'"
  >
    <h2>{{ this.mode }} Description</h2>
    <Markdown
      :source="this.description.markdown"
      class="description pad-side-3"
    />
  </section>
  <!--Recommended Perks-->
  <section v-if="this.perks" :id="this.mode.toLowerCase() + 'Perks'">
    <h2>Recommended {{ this.mode }} Perks</h2>
    <div class="row pad-side-3">
      <!--BARRELS-->
      <div class="col-2 perks">
        <h2>Barrels</h2>
        <PerkIconList :perks="this.perks.perk1" />
      </div>
      <!--Magazines-->
      <div class="col-2 perks">
        <h2>Magazines</h2>
        <PerkIconList :perks="this.perks.perk2" />
      </div>
      <!--3rd-->
      <div class="col-2 perks">
        <h2>3rd Slot</h2>
        <PerkIconList :perks="this.perks.perk3" />
      </div>
      <!--4th-->
      <div class="col-2 perks">
        <h2>4th Slot</h2>
        <PerkIconList :perks="this.perks.perk4" />
      </div>
      <!--Masterworks-->
      <div v-if="this.masterworks && this.masterworks[0]" class="col-2">
        <h2>Masterworks</h2>
        <PerkIconList :perks="this.masterworks" />
      </div>
      <!--ORIGIN TRAIT-->
      <div v-if="this.pve && this.originTrait" class="col-2">
        <h2>Origin Trait</h2>
        <img
          class="perk-icon"
          :src="this.originTrait.icon.url"
          :alt="this.originTrait.name"
          :title="this.originTrait.name"
        />
      </div>
    </div>
  </section>
  <!--Recommended Godrolls-->
  <section v-if="this.rolls" :id="this.mode.toLowerCase() + 'Godrolls'">
    <h2>{{ this.mode }} Godrolls</h2>
    <div
      class="roll row pad-side-3"
      v-for="roll in this.rolls"
      :key="roll.perk1.name"
    >
      <div class="col-perk">
        <div class="row perks">
          <ContentIndicators :indicators="roll.contentIndicators" />
        </div>
        <div class="row perks">
          <PerkIconList
            :perks="[roll.perk1, roll.perk2, roll.perk3, roll.perk4]"
          />
        </div>
      </div>
      <div class="col-desc">
        <h3>{{ roll.title }}</h3>
        <Markdown :source="roll.description.markdown" class="description" />
      </div>
    </div>
  </section>
</template>

<script>
import Markdown from 'vue3-markdown-it';
import PerkIconList from './tmpDisplayTests/PerkIconList.vue';
import ContentIndicators from './dataDisplay/ContentIndicators.vue';

export default {
  props: ['weapon', 'pve', 'pvp'],
  setup(props) {
    if (props.pve) {
      return {
        description: props.weapon.pveDescription,
        perks: props.weapon.pvePerks,
        rolls: props.weapon.pveGodrolls,
        mode: 'PVE',
        originTrait: props.weapon.originTrait,
        masterworks: props.weapon.pveMasterworks,
      };
    }
    return {
      description: props.weapon.pvpDescription,
      perks: props.weapon.pvpPerks,
      rolls: props.weapon.pvpGodrolls,
      mode: 'PVP',
      masterworks: props.weapon.pvpMasterworks,
    };
  },
  components: {
    Markdown,
    PerkIconList,
    ContentIndicators,
  },
};
</script>

<style>
.roll {
  margin-top: 1.5em;
}

.description {
  text-align: justify;
}

.col-perk {
  width: 28%;
}

.col-desc {
  width: 60%;
  padding-left: 30px;
}
</style>
