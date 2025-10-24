<script setup lang="ts">
import WeatherIcon from "../common/WeatherIcon.vue";

defineProps<{
  date: Date;
  maxTemp: number;
  minTemp: number;
  weatherCode: number;
}>();
</script>

<template>
  <li
    class="flex h-41.25 flex-col items-center justify-between rounded-xl bg-white px-2.5 py-4 text-center text-gray-900 shadow-lg shadow-blue-500/5 dark:bg-gray-800 dark:text-white dark:shadow-gray-900/50"
  >
    <p class="text-lg">{{ new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date) }}</p>
    <WeatherIcon class="aspect-square w-15" :weatherCode="weatherCode" />
    <div class="text-md flex w-full justify-between">
      <span>{{ minTemp.toFixed(0) }}&deg;</span>
      <span class="text-gray-700 dark:text-gray-200">{{ maxTemp.toFixed(0) }}&deg;</span>
    </div>
  </li>
</template>
