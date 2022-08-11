<template>
  <div class="main-div" v-if="weaponData">
    <GodrollSelect
      v-model="activeIndex"
      :rolls="weaponData.pveGodrolls"
    />
    <GodrollDisplay
      v-if="selectedRoll"
      :roll="selectedRoll"
      type="PvE"
      :class="{ 'fade-out': switchingRoll }"
    />
  </div>
</template>

<script>
import GodrollSelect from '@/components/godroll/godrollSelect.vue';
import GodrollDisplay from '@/components/godroll/godrollDisplay.vue';

export default {
  props: ['weaponData'],
  data() {
    return {
      activeIndex: 0,
      selectedRoll: null,
      switchingRoll: false,
    };
  },
  watch: {
    activeIndex(index) {
      this.switchingRoll = true;
      setTimeout(() => {
        this.selectedRoll = this.weaponData.pveGodrolls[index];
        this.switchingRoll = false;
      }, '150');
    },
  },
  mounted() {
    this.selectedRoll = { ...this.weaponData.pveGodrolls[0] };
  },
  components: {
    GodrollSelect,
    GodrollDisplay,
  },
};
</script>

<style scoped>

.main-div {
  margin: 15px 0;
  display: flex;
  flex-direction: row;
}

.fade-out {
  opacity: 0.1;
}

</style>
