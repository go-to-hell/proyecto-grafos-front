<template>
  <div class="card mb-3 border-secondary-subtle mx-auto">
    <img :src="imageSource" class="card-img-top" :alt="imageAlt" />
    <div class="card-body">
      <h5 class="card-title">{{ cardTitle }}</h5>
      <p class="card-text">{{ cardText }}</p>
      <div class="text-center">
        <button @click="cardButtonClick" class="btn btn-info">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSource: String,
    imageAlt: String,
    cardTitle: String,
    cardText: String,
    buttonText: String,
  },
  methods: {
    cardButtonClick() {
      this.$emit("button_clicked", true);
    },
  },
};
</script>

<style scoped>
.card {
  width: 50rem;
}
</style>
