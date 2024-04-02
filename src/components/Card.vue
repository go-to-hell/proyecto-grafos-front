<template>
  <div class="card mb-3 border-secondary-subtle mx-auto w-75 shadow">
    <img :src="imageSelected" class="card-img-top" :alt="imageAlt" />
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
import Graphs from "../assets/AlgorithmsImages/Graphs.png";
import JohnsonAlgorithm from "../assets/AlgorithmsImages/JohnsonAlgorithm.png";
import AssignmentAlgorithm from "../assets/AlgorithmsImages/AssignmentAlgorithm.png";
import NorthWestAlgorithm from "../assets/AlgorithmsImages/NorthWestAlgorithm.gif";
import SortingAlgorithms from "../assets/AlgorithmsImages/SortingAlgorithms.png";
import BinaryTreesAlgorithm from "../assets/AlgorithmsImages/BinaryTreesAlgorithm.png";

export default {
  props: {
    imageSource: Number,
    imageAlt: String,
    cardTitle: String,
    cardText: String,
    buttonText: String,
  },
  data() {
    return {
      imageSelected: "",
      algorithmsImages: [
        Graphs,
        JohnsonAlgorithm,
        AssignmentAlgorithm,
        NorthWestAlgorithm,
        SortingAlgorithms,
        BinaryTreesAlgorithm,
      ],
    };
  },
  mounted() {
    this.imageSelected = this.algorithmsImages[this.imageSource];
  },
  methods: {
    cardButtonClick() {
      this.$emit("button_clicked", true);
    },
  },
};
</script>
