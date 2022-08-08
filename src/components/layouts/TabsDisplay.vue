<template>
  <div>
    <div class="tabs-title-container">
      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-title-container"
        @click="changeTab(tab, index)"
        v-ripple
      >
        <nav class="tab-title" :class="{ 'active-title': currentTab.name === tab.name}">
          {{tab.name}}
        </nav>
      </div>
    </div>
    <div class="tab-line-container">
      <div class="tab"
        :style="{ left: tabOffset, width: (100 / tabs.length) + '%' }"
      ></div>
    </div>
    <div class="tabs-content-container">
      <component :is="currentTab.component" :weapon="weapon"></component>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tabs', 'weapon'],
  data(props) {
    return {
      currentTab: props.tabs[0],
      tabOffset: '0%',
    };
  },
  methods: {
    changeTab(tab, index) {
      if (tab.name !== this.currentTab.name) {
        this.currentTab = tab;
        this.tabOffset = `${(100 / this.tabs.length) * index}%`;
      }
    },
  },
};
</script>

<style scoped>

.tabs-title-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
}

.tab-title-container {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
  z-index: 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-right: 1px solid #8787871a;
}

.tab-title-container:last-child {
  border-right: 0;
}

.tab-line-container {
  position: relative;
}

.tab-title {
  font-size: 15px;
  text-transform: uppercase;
  margin: 0;
  color: white;
}

.active-title {
  background: linear-gradient(90deg, #c11671 0%, #a05ff0 50%, #84e4ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

.tabs-content-container{
  width: 100%;
}

.tab {
  position: absolute;
  background: linear-gradient(90deg, #850E4D 0%, #633A96 50%, #68B6CC 100%);
  height: 3px;
  z-index: 0;
  transition: 0.9s cubic-bezier(0.1, 0.9, 0.3, 1);
}

</style>
