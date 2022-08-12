<template>
  <div class="base-background">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
    };
  },
});
</script>

<style>

.base-background {
  background-image: url('./assets/blackArmory.png');
  background-position: center;
  background-size: cover;
}

.grid-background {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath fill='%23fff' opacity='.03' d='M21.747 19.5H30V21h-8.253zm-2.253 2.246h1.5V30h-1.5z'/%3E%3Cpath fill='%23fff' opacity='.15' d='M21.001 21v-1.5h-1.507V21h1.507z'/%3E%3Cpath fill='%23fff' opacity='.03' d='M19.494 0h1.5v3.752h-1.5zm2.253 4.498H30v1.5h-8.253zm-2.253 2.246h1.5v12.01h-1.5zM6.748 4.5H18.75V6H6.748zM4.494 0h1.5v3.754h-1.5zM0 4.5h3.749V6H0z'/%3E%3Cpath fill='%23fff' opacity='.15' d='M5.994 4.5h-1.5V6h1.508V4.5h-.008zm14.996 0h-1.5V6h1.508V4.5h-.008z'/%3E%3Cpath fill='%23fff' opacity='.03' d='M6.738 19.5h12.01V21H6.738zM4.494 6.746h1.5v12.009h-1.5zM0 19.5h3.749V21H0z'/%3E%3Cpath fill='%23fff' opacity='.15' d='M4.494 19.5h1.499V21H4.494z'/%3E%3Cpath fill='%23fff' opacity='.03' d='M4.494 21.746h1.5V30h-1.5z'/%3E%3C/svg%3E");
}

html, body {
  margin: 0;
  font-size: 14px;
  font-family: 'Roboto', 'Fira Sans',sans-serif;
  color: white;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0;
  padding-bottom: 0;
  color: #969696
}

p {
  margin: 0;
  padding-top: 0;
}

/* Ripple */

.ripple {
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: scale(0);
  position: absolute;
  opacity: 1;
}

.ripple-effect {
  animation: ripple .4s linear;
}

@keyframes ripple {
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

</style>
