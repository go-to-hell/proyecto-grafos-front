import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import axios from "axios";
import cablewayData from '../data/cableway-data.json';

export const useCablewayStore = defineStore("cableway", {
    state: () => ({
        optimalValue: null,
        optimalPath: {},
    }),

    actions: {
        async dijkstraCableway(startNode, endNode, cardtype, timeOrMoney) {
            const authStore = useAuthStore();
            const requestBody = cablewayData;
            
            const response = await axios.post(
                `http://localhost:8000/dijkstra/telefericos?startNode=${startNode}&endNode=${endNode}&maximize=false&cardtype=${cardtype}&timeOrMoney=${timeOrMoney}`,
                requestBody,
                {
                headers: {
                    Authorization: `Bearer ${authStore.accessToken}`,
                    "Content-Type": "application/json",
                },
                }
            );

            this.optimalValue = response.data.optimalValue;
            this.optimalPath = response.data.optimalPath;
        },

    },
});