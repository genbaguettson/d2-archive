<template>
  <div>
    <div class="tabs-title-container">
      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
      <div
        v-for="(tabName, index) in tabs"
        :key="index" class="tab-title-container"
        @click="changeTab(tabName, index)"
      >
        <nav class="tab-title">
          {{tabName}}
        </nav>
      </div>
      </div>
    </div>
    <div class="tab-line-container">
      <div class="tab"
        :style="{ left: tabOffset, width: (100 / tabs.length) + '%' }"
      >
    </div>
    <div class="tabs-content-container">

    </div>
  </div>
</template>

<script>
export default {
  props: ['tabs'],
  data(props) {
    return {
      currentTab: props.tabs[0],
      tabOffset: '0%',
    };
  },
  methods: {
    changeTab(tabName, index) {
      if (tabName !== this.currentTab) {
        this.currentTab = tabName;
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

.tab-line-container {
  position: relative;
}

.tab-title-container {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
  z-index: 1;
  cursor: pointer;
}

.tab-title {
  font-size: 15px;
  text-transform: uppercase;
  margin: 0;
  color: white;
}

.tabs-content-container{
  display: flex;
}

.tab {
    position: absolute;
    background: linear-gradient(90deg, #850E4D 0%, #633A96 50%, #68B6CC 100%);
    height: 4px;
    z-index: 0;
    transition: 0.9s cubic-bezier(0.1, 0.9, 0.3, 1);
}

</style>
