<template>
  <div class="main-div" v-if="weaponData">
    <GodrollSelect
      v-model="activeIndex"
      :rolls="weaponData.pveGodrolls"
    />
    <div class="roll-display" v-if="selectedRoll" :class="{ 'fade-out': switchingRoll }">
      <SectionTitle title="PvE Godroll" />
      <div class="main-roll-info">
        <h2 class="roll-name">
          {{selectedRoll.title}}
        </h2>
        <div class="indicator-display">
          <div
            v-for="(indicator, index) in selectedRoll.contentIndicators"
            :key="index"
          >
            <img :src="indicator.icon.url" :alt="indicator.name" class="indicator-icon" />
          </div>
        </div>
      </div>
      <div class="roll-info">
        <div class="roll-stats half-col">
          <WeaponStats title="Stats" :stats="weaponStats"/>
        </div>
        <div class="additional-roll-info half-col">
          <SectionTitle title="Roll" />
          <div class="selected-roll-perks grid-background">
            <!-- eslint-disable-next-line max-len -->
            <img :src="selectedRoll.perk1.icon.url" :alt="selectedRoll.perk1.name" class="sel-perk-icon"/>
            <!-- eslint-disable-next-line max-len -->
            <img :src="selectedRoll.perk2.icon.url" :alt="selectedRoll.perk2.name" class="sel-perk-icon"/>
            <!-- eslint-disable-next-line max-len -->
            <img :src="selectedRoll.perk3.icon.url" :alt="selectedRoll.perk3.name" class="sel-perk-icon"/>
            <!-- eslint-disable-next-line max-len -->
            <img :src="selectedRoll.perk4.icon.url" :alt="selectedRoll.perk4.name" class="sel-perk-icon"/>
          </div>
          <SectionTitle title="Roll Description" />
          <div
            class="selected-roll-description"
            v-html="markdownToHtml(selectedRoll.description.markdown)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/layouts/SectionTitle.vue';
import WeaponStats from '@/components/weaponInfo/WeaponStats.vue';
import GodrollSelect from '@/components/godrollDisplay/godrollSelect.vue';
import { marked } from 'marked';

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
      activeIndex: 0,
      selectedRoll: null,
      switchingRoll: false,
    };
  },
  methods: {
    markdownToHtml(markdown) {
      return marked(markdown);
    },
  },
  watch: {
    activeIndex(index) {
      this.switchingRoll = true;
      setTimeout(() => {
        this.selectedRoll = this.weaponData.pveGodrolls[index];
        this.switchingRoll = false;
      }, '150');
    },
  },
  mounted() {
    this.selectedRoll = { ...this.weaponData.pveGodrolls[0] };
  },
  components: {
    SectionTitle,
    WeaponStats,
    GodrollSelect,
  },
};
</script>

<style scoped>

.main-div {
  margin: 15px 0;
  display: flex;
  flex-direction: row;
}

.roll-select {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #8787871a;
}

.godroll {
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  padding: 10px;
}

.godroll.active {
  background-color: #3737379f;
  transition: 0.5s linear;
}

.perk-select-display {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  padding: 6px;
}

.perk-icon {
  height: 40px;
  width: 40px;
  padding: 4px;
}

.roll-display {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 20px;
  transition: 0.15s linear;
}

.roll-display.fade-out {
  opacity: 0.1;
}

.main-roll-info {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.roll-name {
  color: white;
  font-weight: 400;
  flex: 1;
  margin: 0;
  display: flex;
  align-items: center;
}

.indicator-display {
  display: flex;
  flex-direction: row;
  margin-right: 10px;
}

.indicator-icon {
  height: 40px;
  padding: 5px;
  display: flex;
  align-items: center;
}

.roll-info {
  display: flex;
  flex-direction: row;
}

.selected-roll-perks {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px 0;
  padding: 10px 0;
}

.sel-perk-icon {
  height: 50px;
  width: 50px;
  padding: 8px;
}

.selected-roll-description {
  margin-top: 10px;
}

.half-col {
  display: flex;
  flex-direction: column;
  flex: 1;
}

</style>
