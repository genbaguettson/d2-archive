<template>
  <div class="stats-view-container">
    <SectionTitle :title="title" />
    <div class="info-box grid-background">
      <div class="stat-box" v-for="(stat, statName, index) in stats" :key="index">
        <p class="stat-name">{{ statName }}</p>
        <div class="stat-display-box">
          <p class="stat-value">{{stat}}</p>
          <RecoilDirection v-if="statName == 'Recoil Direction'" :value="stat"></RecoilDirection>
          <StatBar
            v-else-if="statName != 'Rounds Per Minute' && statName != 'Magazine'"
            :value="stat"
          ></StatBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatBar from '../dataDisplay/StatBar.vue';
import RecoilDirection from '../dataDisplay/RecoilDirection.vue';
import SectionTitle from '../layouts/SectionTitle.vue';

export default {
  props: ['title', 'stats'],
  components: {
    StatBar,
    SectionTitle,
    RecoilDirection,
  },
};
</script>

<style scoped>

.stats-view-container {
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #a8a8a8;
}

.info-box {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 10px 15px;
}

.stat-box {
  display: flex;
  flex-direction: row;
}

.stat-name {
  width: 280px;
}

.stat-display-box {
  display: flex;
  align-items: center;
  width: 100%;
}

.stat-value {
  margin-right: 10px;
}

</style>
