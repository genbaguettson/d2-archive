<template>
  <div class="stats-view-container">
    <p class="part-subtitle">
      {{title}}
    </p>
    <div class="info-divider"></div>
    <div class="info-box">
      <div class="stat-box" v-for="(stat, statName, index) in stats" :key="index">
        <p class="stat-name">{{ statName }}</p>
        <StatBar :stat="stat"></StatBar>
      </div>
    </div>
  </div>
</template>

<script>
import StatBar from './dataDisplay/StatBar.vue';

export default {
  props: ['title', 'stats'],
  setup() {
    return {
    };
  },
  components: {
    StatBar,
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath fill='%23fff' opacity='.03' d='M21.747 19.5H30V21h-8.253zm-2.253 2.246h1.5V30h-1.5z'/%3E%3Cpath fill='%23fff' opacity='.15' d='M21.001 21v-1.5h-1.507V21h1.507z'/%3E%3Cpath fill='%23fff' opacity='.03' d='M19.494 0h1.5v3.752h-1.5zm2.253 4.498H30v1.5h-8.253zm-2.253 2.246h1.5v12.01h-1.5zM6.748 4.5H18.75V6H6.748zM4.494 0h1.5v3.754h-1.5zM0 4.5h3.749V6H0z'/%3E%3Cpath fill='%23fff' opacity='.15' d='M5.994 4.5h-1.5V6h1.508V4.5h-.008zm14.996 0h-1.5V6h1.508V4.5h-.008z'/%3E%3Cpath fill='%23fff' opacity='.03' d='M6.738 19.5h12.01V21H6.738zM4.494 6.746h1.5v12.009h-1.5zM0 19.5h3.749V21H0z'/%3E%3Cpath fill='%23fff' opacity='.15' d='M4.494 19.5h1.499V21H4.494z'/%3E%3Cpath fill='%23fff' opacity='.03' d='M4.494 21.746h1.5V30h-1.5z'/%3E%3C/svg%3E");
}

.stat-box {
  display: flex;
  flex-direction: row;
}

.stat-name {
  width: 280px;
}

</style>
