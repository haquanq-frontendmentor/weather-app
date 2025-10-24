<script setup lang="ts">
import { useWeatherForecastStore } from "@/stores/weatherForecastStore";
import { storeToRefs } from "pinia";
import WeatherDailyItem from "./WeatherDailyItem.vue";
import WeatherDailyItemLoading from "./WeatherDailyItemLoading.vue";

const weatherForecastStore = useWeatherForecastStore();
const { forecast, isFetchingForecast } = storeToRefs(weatherForecastStore);
</script>

<template>
  <ul class="grid grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] gap-4">
    <WeatherDailyItemLoading v-if="isFetchingForecast" v-for="_ in Array(forecast.daily.weatherCodes.length)" />
    <WeatherDailyItem
      v-else
      v-for="(weatherCode, index) in forecast.daily.weatherCodes"
      :minTemp="forecast?.daily.minTempratures[index] || 0"
      :maxTemp="forecast?.daily.maxTempratures[index] || 0"
      :date="forecast?.daily.durations[index] || new Date()"
      :weatherCode="weatherCode"
    />
  </ul>
</template>
