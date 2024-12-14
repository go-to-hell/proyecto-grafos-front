import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import axios from "axios";

export const useCablewayStore = defineStore("cableway", {
  state: () => ({ edges: {}, optimalValue: null, optimalPath: {} }),

  actions: {
    async dijkstraCableway(
      cablewayData,
      startNode,
      endNode,
      cardtype,
      targetVariable,
      energyConstraint
    ) {
      const authStore = useAuthStore();

      // Set default value for cardtype if it's empty
      if (!cardtype) {
        cardtype = "regular";
      }

      const requestBody = {
        VEGraph: cablewayData,
        disabledLines: []
      };

      console.log(requestBody);
      const response = await axios.post(
        `http://localhost:8000/dijkstra/telefericos?startNode=${startNode}&endNode=${endNode}&maximize=false&cardtype=${cardtype}&targetVariable=${targetVariable}&energy_constraint=${energyConstraint}`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${authStore.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("cableway response data: ", response.data);
      this.edges = response.data.edges;
      this.optimalValue = response.data.optimalValue;
      this.optimalPath = response.data.optimalPath;
    },
  },
});
