<template>
  <div class="stat-bg">
    <div class="stat-bar">
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  setup(props) {
    return {
      effectiveStatWidth: `${Math.min(props.value, 100)}%`,
    };
  },
};
</script>

<style scoped>

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

</style>
