<template>
  <div
    class="card mb-3 border-secondary-subtle mx-auto w-75 shadow"
    :id="cardId"
  >
    <img :src="imageSelected" class="card-img-top" :alt="imageAlt" />
    <div class="card-body">
      <h5 class="card-title">{{ cardTitle }}</h5>
      <p class="card-text" v-html="cardText"></p>
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
import KruskalAlgorithm from "../assets/AlgorithmsImages/KruskalAlgorithm.jpg";
import DijkstraAlgorithm from "../assets/AlgorithmsImages/DijkstraAlgorithm.png";
import CompetAlgorithm from "../assets/AlgorithmsImages/CompetAlgorithm.png";

export default {
  props: {
    cardId: String,
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
        KruskalAlgorithm,
        DijkstraAlgorithm,
        CompetAlgorithm,
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
