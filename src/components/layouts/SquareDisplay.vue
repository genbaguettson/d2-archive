<template>
  <div>
      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="square-tab"
        :class="{ 'active': activeIndex === index }"
        @click="setActive(index)"
      >
        <img :src="tab.iconUrl" :alt="tab.name" class="square-icon"/>
      </div>
  </div>
</template>

<script>

export default {
  props: ['modelValue', 'tabs'],
  emits: ['update:modelValue'],
  methods: {
    setActive(index) {
      this.activeIndex = index;
      this.$emit('update:modelValue', index);
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  mounted() {
    if (this.tabs.length > 0) {
      this.setActive(0);
    }
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

.square-tab:hover {
  border: 1px solid white;
  background-color: #676767;
  transition: 0.2s linear;
}

.square-icon {
  height: 90%;
  width: 90%;
}

</style>
