<script setup lang="ts">
import { useWeatherForecastStore } from "@/stores/weatherForecastStore";
import { useWeatherSettingStore } from "@/stores/weatherSettingStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import WeatherTodayItem from "./WeatherTodayItem.vue";
import WeatherTodayItemLoading from "./WeatherTodayItemLoading.vue";

const weatherForecastStore = useWeatherForecastStore();
const { forecast, isFetchingForecast } = storeToRefs(weatherForecastStore);
const weatherSettingStore = useWeatherSettingStore();
const { selectedPrecipitationUnit, selectedWindSpeedUnit } = storeToRefs(weatherSettingStore);

const items = computed(() => [
  {
    label: "Feels Like",
    value: forecast.value.current.apparentTemparature.toFixed() + " \u00B0",
  },
  {
    label: "Humidity",
    value: forecast.value.current.humidity.toFixed() + " %",
  },
  {
    label: "Wind",
    value: forecast.value.current.humidity.toFixed() + " " + selectedWindSpeedUnit.value,
  },
  {
    label: "Precipitation",
    value: forecast.value.current.precipitation.toFixed() + " " + selectedPrecipitationUnit.value,
  },
]);
</script>

<template>
  <ul class="grid grid-cols-2 gap-4 pt-5 text-gray-500 sm:pt-8 xl:grid-cols-4 xl:gap-6">
    <WeatherTodayItemLoading v-if="isFetchingForecast" v-for="_ in items" />
    <WeatherTodayItem v-else v-for="item in items" :label="item.label" :value="item.value" />
  </ul>
</template>
