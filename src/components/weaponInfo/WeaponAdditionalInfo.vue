<template>
  <div class="additional-info-container">
    <SectionTitle :title="title" />
    <div class="info-box grid-background">
      <img
        class="info-icon"
        :src="iconUrl"
        :title="title + ': ' + text"
        :alt="title + ': ' + text"
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
import SectionTitle from '../layouts/SectionTitle.vue';

export default {
  props: ['title', 'text', 'subtext', 'iconUrl'],
  components: {
    SectionTitle,
  },
};
</script>

<style scoped>

.additional-info-container:not(:last-child) {
  margin-bottom: 25px;
}

.info-box {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  padding: 10px 15px;
}

.info-icon {
  width: 55px;
  height: 55px;
  margin-right: 10px;
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
