<template>
  <div class="stat-box">
    <div class="stat-bg">
      <div class="stat-bar">
      </div>
    </div>
    <p class="stat-value">{{stat}}</p>
  </div>
</template>

<script>
export default {
  props: ['stat'],
  setup(props) {
    return {
      effectiveStatWidth: `${Math.min(props.stat, 100)}%`,
    };
  },
};
</script>

<style scoped>

.stat-box {
  display: flex;
  align-items: center;
  width: 100%;
}

.stat-bg {
  background-color: #2b2b2b;
  height: 12px;
  width: 100%;
}

.stat-bar {
  background-color: white;
  height: 100%;
  width: v-bind('effectiveStatWidth')
}

.stat-value {
  margin-left: 10px;
}

</style>
