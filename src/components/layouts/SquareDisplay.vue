<template>
  <div class="square-container">
      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="square-tab"
        :class="{ 'active': activeIndex === index }"
        @click="setActive(index)"
        v-ripple
      >
        <img :src="tab.iconUrl" :alt="tab.name" class="square-icon"/>
      </div>
  </div>
</template>

<script>

const generalIcon = require('@/assets/generalIcon.png');
const pveIcon = require('@/assets/otherPveIcon.png');
const pvpIcon = require('@/assets/pvpIcon.png');
const fullscreenIcon = require('@/assets/fullscreenIcon.png');

export default {
  props: [],
  setup() {
    return {
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
  },
  data() {
    return {
      tabs: [
        {
          name: 'overview',
          iconUrl: generalIcon,
        },
        {
          name: 'pve',
          iconUrl: pveIcon,
        },
        {
          name: 'pvp',
          iconUrl: pvpIcon,
        },
        {
          name: 'fullscreen',
          iconUrl: fullscreenIcon,
        },
      ],
      activeIndex: 0,
    };
  },
};
</script>

<style scoped>

.square-tab {
  border: 1px solid #404040;
  background-color: #1e1e1e;
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.square-tab:not(:last-child) {
  margin-bottom: 3px;
}

.square-tab.active {
  border: 1px solid white;
  background-color: #373737;
  transition: 0.5s linear;
}

.square-icon {
  height: 90%;
  width: 90%;
}

</style>
