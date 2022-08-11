<template>
  <div class="roll-select">
    <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
    <GodrollSummary
      v-for="(roll, index) in rolls"
      :key="index"
      :roll="roll"
      :isActive="activeIndex === index ? true : false"
      @click="selectRoll(index, roll)"
    />
  </div>
</template>

<script>
import GodrollSummary from '@/components/godroll/godrollSummary.vue';

export default {
  props: ['modelValue', 'rolls'],
  emits: ['update:modelValue'],
  methods: {
    selectRoll(index) {
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
    if (this.rolls.length > 0) {
      this.selectRoll(0);
    }
  },
  components: {
    GodrollSummary,
  },
};
</script>

<style scoped>

.roll-select {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #8787871a;
}

</style>
