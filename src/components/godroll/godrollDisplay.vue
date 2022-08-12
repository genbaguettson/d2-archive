<template>
  <div class="roll-display">
    <SectionTitle :title='`${type} Godroll`' />
    <div class="main-roll-info">
      <h2 class="roll-name">
        {{roll.title}}
      </h2>
      <div class="indicator-display">
        <div
          v-for="(indicator, index) in this.contentIndicators"
          :key="index"
        >
          <img
            :src="indicator.icon"
            :alt="indicator.name"
            :class="{ 'greyed-out': !hasIndicator(roll, indicator)}"
            class="indicator-icon"
          />
        </div>
      </div>
    </div>
    <div class="roll-info">
      <div class="roll-stats half-col">
        <WeaponStats title="Stats" :stats="weaponStats"/>
      </div>
      <div class="half-col">
        <SectionTitle title="Roll" />
        <div class="selected-roll-perks grid-background">
          <!-- eslint-disable-next-line max-len -->
          <img :src="roll.perk1.icon.url" :alt="roll.perk1.name" class="selected-perk-icon"/>
          <!-- eslint-disable-next-line max-len -->
          <img :src="roll.perk2.icon.url" :alt="roll.perk2.name" class="selected-perk-icon"/>
          <!-- eslint-disable-next-line max-len -->
          <img :src="roll.perk3.icon.url" :alt="roll.perk3.name" class="selected-perk-icon"/>
          <!-- eslint-disable-next-line max-len -->
          <img :src="roll.perk4.icon.url" :alt="roll.perk4.name" class="selected-perk-icon"/>
        </div>
        <SectionTitle title="Roll Description" />
        <div
          class="selected-roll-description"
          v-html="markdownToHtml(roll.description.markdown)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/layouts/SectionTitle.vue';
import WeaponStats from '@/components/weaponInfo/WeaponStats.vue';

import { marked } from 'marked';

const lowEndIcon = require('@/assets/contentIndicators/contentLowEnd.png');
const midEndIcon = require('@/assets/contentIndicators/contentMidEnd.png');
const highEndIcon = require('@/assets/contentIndicators/contentHighEnd.png');

export default {
  props: ['roll', 'type'],
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
      contentIndicators: [
        {
          name: 'Low end',
          icon: lowEndIcon,
        },
        {
          name: 'Midgame',
          icon: midEndIcon,
        },
        {
          name: 'Endgame',
          icon: highEndIcon,
        },
      ],
    };
  },
  methods: {
    markdownToHtml(markdown) {
      return marked(markdown);
    },
    hasIndicator(roll, indicator) {
      return roll.contentIndicators.find((_indicator) => _indicator.name === indicator.name);
    },
  },
  components: {
    SectionTitle,
    WeaponStats,
  },
};
</script>

<style scoped>

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

.indicator-icon.greyed-out {
  filter: brightness(30%)
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

.selected-perk-icon {
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
