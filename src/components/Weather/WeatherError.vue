<script setup lang="ts">
import { ErrorIcon, RetryIcon } from "@/assets/images";
import Container from "@/layouts/Container.vue";
import { useWeatherForecastStore } from "@/stores/weatherForecastStore";
const weatherForecastStore = useWeatherForecastStore();
</script>

<template>
  <Container>
    <section class="flex flex-col items-center gap-6 pt-25 text-center text-gray-800 dark:text-white">
      <ErrorIcon class="scale-200" />
      <h1 class="text-4xl">Something went wrong</h1>
      <p class="max-w-120 text-xl text-gray-500 dark:text-gray-200">
        We couldn’t connect to the server (API error). Please try again in a few moments.
      </p>
      <button
        class="text-md flex h-[clamp(2.0625rem,1.4661rem+2.5445vw,2.6875rem)] items-center gap-[clamp(0.375rem,0.1365rem+1.0178vw,0.625rem)] rounded-md bg-white px-[clamp(0.625rem,0.2672rem+1.5267vw,1rem)] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 sm:rounded-lg dark:bg-gray-800 dark:text-white dark:focus-visible:outline-gray-200"
        type="button"
        @click="weatherForecastStore.getForecast()"
      >
        <RetryIcon />
        <span>Retry</span>
      </button>
    </section>
  </Container>
</template>
