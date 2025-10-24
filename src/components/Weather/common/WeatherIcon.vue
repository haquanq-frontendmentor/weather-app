<script setup lang="ts">
import {
  DrizzleIcon,
  FogIcon,
  OvercastIcon,
  PartlyCloudyIcon,
  RainIcon,
  SnowIcon,
  StormIcon,
  SunnyIcon,
} from "@/assets/images";

defineProps<{ weatherCode: number }>();
</script>

<template>
  <div class="*:h-full *:object-contain">
    <img :src="SunnyIcon" v-if="[0, 1].includes(weatherCode)" alt="Sunny" />
    <img :src="PartlyCloudyIcon" v-if="[2].includes(weatherCode)" alt="Parly cloudy" />
    <img :src="OvercastIcon" v-if="[3].includes(weatherCode)" alt="Overcast" />
    <img :src="FogIcon" v-if="[45, 48].includes(weatherCode)" alt="Foggy" />
    <img :src="DrizzleIcon" v-if="[51, 53, 55].includes(weatherCode)" alt="Drizzle" />
    <img :src="RainIcon" v-if="[61, 63, 65, 80, 81, 82].includes(weatherCode)" alt="Rainy" />
    <img :src="SnowIcon" v-if="[71, 73, 75, 77, 85, 86].includes(weatherCode)" alt="Snowy" />
    <img :src="StormIcon" v-if="[95, 96, 99].includes(weatherCode)" alt="Storm" />
  </div>
</template>
