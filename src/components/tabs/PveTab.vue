<template>
  <div class="main-div" v-if="weaponData">
    <div class="roll-select">
      <div v-for="(roll, index) in weaponData.pveGodrolls" :key="index" class="godroll">
        <img :src="roll.perk1.icon.url" :alt="roll.perk1.name" class="perk-icon"/>
        <img :src="roll.perk2.icon.url" :alt="roll.perk2.name" class="perk-icon"/>
        <img :src="roll.perk3.icon.url" :alt="roll.perk3.name" class="perk-icon"/>
        <img :src="roll.perk4.icon.url" :alt="roll.perk4.name" class="perk-icon"/>
      </div>
    </div>
    <div class="roll-display">
      This is the roll
    </div>
  </div>
</template>

<script>
export default {
  props: ['weaponData'],
  setup() {
    return {
    };
  },
};
</script>

<style scoped>

.main-div {
  margin: 15px 0;
  display: flex;
  flex-direction: row;
}

.roll-select {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #8787871a;
}

.godroll {
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  margin-right: 5px;
  border-bottom: 1px solid #8787871a;
}

.godroll:first-child {
  border-top: 1px solid #8787871a;
}

.perk-icon {
  height: 40px;
  width: 40px;
  padding: 2px;
}

.roll-display {
  display: flex;
  flex: 1;
  padding-left: 20px;
}

</style>
