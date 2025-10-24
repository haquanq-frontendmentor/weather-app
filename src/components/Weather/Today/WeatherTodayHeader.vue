<script setup lang="ts">
import { TodayBackgroundLarge, TodayBackgroundSmall } from "@/assets/images";
import { useGeoLocationStore } from "@/stores/geoLocationStore";
import { useWeatherForecastStore } from "@/stores/weatherForecastStore";
import { storeToRefs } from "pinia";
import WeatherIcon from "../common/WeatherIcon.vue";

const geoLocationStore = useGeoLocationStore();
const weatherForecastStore = useWeatherForecastStore();
const { forecast } = storeToRefs(weatherForecastStore);
</script>

<template>
  <div class="relative h-71.5 rounded-[1.25rem]">
    <div class="h-full overflow-hidden rounded-[inherit] *:h-full *:w-full *:object-cover">
      <img class="sm:hidden" :src="TodayBackgroundSmall" alt="" />
      <img class="hidden sm:block" :src="TodayBackgroundLarge" alt="" />
    </div>
    <div
      class="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 text-center text-white sm:flex-row sm:justify-between sm:text-start"
    >
      <div class="flex max-w-60 flex-col gap-3">
        <h2 class="text-2xl">
          {{ geoLocationStore.selectedGeoLocation.name }}
        </h2>
        <p class="text-lg text-gray-100">
          {{
            new Intl.DateTimeFormat("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
              year: "numeric",
            }).format(new Date())
          }}
        </p>
      </div>

      <div class="flex items-center gap-5">
        <WeatherIcon class="h-30" :weatherCode="forecast.current.weatherCode" />
        <p class="text-5xl italic">{{ forecast.current.temperature.toFixed(0) }}&deg;</p>
      </div>
    </div>
  </div>
</template>
