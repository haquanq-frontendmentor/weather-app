<script setup lang="ts">
import WeatherDaily from "./Daily/WeatherDaily.vue";
import WeatherHourly from "./Hourly/WeatherHourly.vue";
import WeatherToday from "./Today/WeatherToday.vue";
</script>

<template>
  <div class="mx-auto grid max-w-200 gap-8 pt-8 sm:pt-12 lg:mx-0 lg:max-w-full lg:grid-cols-[auto_24rem] lg:gap-y-12">
    <div>
      <WeatherToday />
    </div>
    <div class="lg:col-start-1 lg:row-start-2">
      <WeatherDaily />
    </div>
    <div class="lg:row-span-2">
      <WeatherHourly />
    </div>
  </div>
</template>
