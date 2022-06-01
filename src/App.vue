<template>
  <n-config-provider :theme="darkTheme">
    <router-view />
  </n-config-provider>
</template>

<script>
import { defineComponent } from 'vue';
import { darkTheme } from 'naive-ui';

export default defineComponent({
  setup() {
    return {
      darkTheme,
    };
  },
});
</script>
