<template>
  <div class="stats-view-container">
    <p class="part-subtitle">
      {{title}}
    </p>
    <div class="info-divider"></div>
    <div class="info-box">
      <div class="stat-box" v-for="(stat, statName, index) in stats" :key="index">
        <p class="stat-name">{{ statName }}</p>
        <n-progress
          class="stat-display"
          type='line'
          :percentage="stat"
          :color="'var(white)'"
          :border-radius="0"
        >{{ stat }}</n-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'stats'],
  setup(props) {
    console.log(props.stats);
    return {
    };
  },
};
</script>

<style>

.stats-view-container {
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #a8a8a8
}

.info-box {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}

.stat-box {
  display: flex;
  flex-direction: row;
}

.stat-name {
  width: 280px;
}

</style>
