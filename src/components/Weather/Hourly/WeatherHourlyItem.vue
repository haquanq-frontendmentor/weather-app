<script setup lang="ts">
import WeatherIcon from "../common/WeatherIcon.vue";

defineProps<{ timestamp: Date; weatherCode: number; temperature: number }>();
</script>

<template>
  <li
    class="darkinset-ring-gray-600 flex items-center justify-between gap-2 rounded-lg bg-white py-2.5 pr-4 pl-3 text-gray-900 inset-ring inset-ring-blue-200 dark:bg-gray-700 dark:text-white dark:inset-ring-gray-600"
  >
    <div class="flex items-center gap-2">
      <WeatherIcon class="aspect-square w-10" :weatherCode="weatherCode" />
      <p class="text-xl">
        {{ new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: true }).format(timestamp) }}
      </p>
    </div>
    <span class="text-md">{{ temperature }}&deg;</span>
  </li>
</template>
