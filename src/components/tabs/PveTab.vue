<template>
  <div class="main-div" v-if="weapon">
    <GodrollSelect
      v-model="activeIndex"
      :rolls="weapon.pveGodrolls"
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
  props: ['weapon'],
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
        this.selectedRoll = this.weapon.pveGodrolls[index];
        console.log(this.selectedRoll);
        this.switchingRoll = false;
      }, '150');
    },
  },
  mounted() {
    this.selectedRoll = { ...this.weapon.pveGodrolls[0] };
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
