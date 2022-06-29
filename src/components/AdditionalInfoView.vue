<template>
  <div class="additional-info-container">
    <p class="part-subtitle">
      {{title}}
    </p>
    <div class="info-divider"></div>
    <div class="info-box">
      <img
        class="info-icon"
        :src="iconUrl"
        :title="'Source: ' + text"
        :alt="'Source: ' + text"
      />
      <div class="info-text-box">
        <h2 class="info-title">
          {{text}}
        </h2>
        <p class="info-subtitle">
          {{subtext}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'text', 'subtext', 'iconUrl'],
  setup() {
    return {
    };
  },
};
</script>

<style>

.additional-info-container:not(:last-child) {
  margin-bottom: 25px;
}

.info-icon {
  width: 55px;
  height: 55px;
  margin-right: 10px;
}

.info-box {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}

.info-text-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-title {
  margin-top: 0;
  color: white;
  font-weight: 400;
  font-size: 13px;
}

.info-subtitle {
  margin-bottom: 0;
  color: #737373;
  font-weight: 600;
  font-size: 12px;
}

</style>
