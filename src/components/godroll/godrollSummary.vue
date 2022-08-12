<template>
  <!-- eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events -->
  <div
    class="godroll"
    :class="{ 'active': isActive }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <SectionTitle
      :title="roll.title"
      :white="isActive || isHovered"
    />
    <div class="perk-select-display grid-background">
      <img :src="roll.perk1.icon.url" :alt="roll.perk1.name" class="perk-icon"/>
      <img :src="roll.perk2.icon.url" :alt="roll.perk2.name" class="perk-icon"/>
      <img :src="roll.perk3.icon.url" :alt="roll.perk3.name" class="perk-icon"/>
      <img :src="roll.perk4.icon.url" :alt="roll.perk4.name" class="perk-icon"/>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/layouts/SectionTitle.vue';

export default {
  props: ['roll', 'isActive'],
  data() {
    return {
      isHovered: false,
    };
  },
  components: {
    SectionTitle,
  },
};
</script>

<style scoped>

.godroll {
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  padding: 10px;
  position: relative;
  overflow: hidden;
}

.godroll.active {
  background-color: #3737379f;
  transition: 0.5s linear;
}

.godroll:hover {
  background-color: #676767;
  transition: 0.5s linear;
}

.perk-select-display {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  padding: 6px;
}

.perk-icon {
  height: 40px;
  width: 40px;
  padding: 4px;
}

</style>
