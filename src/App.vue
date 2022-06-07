<template>
  <n-config-provider :theme="darkTheme" class="base-background">
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

<style src="./styles/app.css" />
