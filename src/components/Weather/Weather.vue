<script setup lang="ts">
import Container from "@/layouts/Container.vue";
import { useGeoLocationStore } from "@/stores/geoLocationStore";
import { useWeatherForecastStore } from "@/stores/weatherForecastStore";
import { useWeatherSettingStore } from "@/stores/weatherSettingStore";
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";
import WeatherContent from "./WeatherContent.vue";
import WeatherError from "./WeatherError.vue";
import WeatherHeader from "./WeatherHeader.vue";

const weatherForecastStore = useWeatherForecastStore();
const weatherSettingStore = useWeatherSettingStore();
const { selectedPrecipitationUnit, selectedTemperatureUnit, selectedWindSpeedUnit } = storeToRefs(weatherSettingStore);
const geoLocationStore = useGeoLocationStore();
const { selectedGeoLocation } = storeToRefs(geoLocationStore);

onMounted(() => {
  weatherForecastStore.getForecast();
});

watch([selectedGeoLocation, selectedPrecipitationUnit, selectedTemperatureUnit, selectedWindSpeedUnit], () => {
  weatherForecastStore.getForecast();
});
</script>

<template>
  <Container>
    <WeatherError v-if="weatherForecastStore.isError" />
    <section v-else class="pb-[clamp(3rem,1.0916rem+8.1425vw,5rem)]">
      <WeatherHeader />
      <WeatherContent />
    </section>
  </Container>
</template>
