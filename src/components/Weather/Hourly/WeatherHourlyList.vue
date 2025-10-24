<script setup lang="ts">
import { useWeatherForecastStore } from "@/stores/weatherForecastStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import WeatherHourlyItem from "./WeatherHourlyItem.vue";
import WeatherHourlyItemLoading from "./WeatherHourlyItemLoading.vue";

const NUMBER_OF_ITEMS = 8;

const { selectedDayIndex } = defineProps<{ selectedDayIndex: number }>();

const weatherForecastStore = useWeatherForecastStore();
const { forecast, isFetchingForecast } = storeToRefs(weatherForecastStore);

const selectedDayForecast = computed(() =>
  forecast.value?.hourly.durations
    .slice(24 * selectedDayIndex, 24 * (selectedDayIndex + 1))
    .slice(0, NUMBER_OF_ITEMS)
    .map((d, index) => ({
      timestamp: d,
      temparature: forecast.value.hourly.temparatures[index + 24 * selectedDayIndex] || 0,
      weatherCode: forecast.value.hourly.weatherCodes[index + 24 * selectedDayIndex] || 0,
    })),
);
</script>

<template>
  <ul class="grid gap-4">
    <WeatherHourlyItemLoading v-if="isFetchingForecast" v-for="_ in Array(8)" />
    <WeatherHourlyItem
      v-else
      v-for="item in selectedDayForecast"
      :temperature="item.temparature"
      :timestamp="item.timestamp"
      :weather-code="item.weatherCode"
    />
  </ul>
</template>
