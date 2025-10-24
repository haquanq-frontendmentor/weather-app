<script setup lang="ts">
import { WeatherLogoDark, WeatherLogoLight } from "../../assets/images";
import Container from "../../layouts/Container.vue";
import { useThemeStore } from "../../stores/themeStore";
import WeatherSetting from "../Weather/Setting/WeatherSetting.vue";
import ThemeToggle from "./ThemeToggle.vue";

const themeStore = useThemeStore();
</script>

<template>
  <header>
    <Container>
      <div class="flex items-center justify-between pt-[clamp(1.5rem,0.0687rem+6.1069vw,3rem)]">
        <div class="h-[clamp(1.75rem,1.0344rem+3.0534vw,2.5rem)] *:h-full *:object-contain">
          <img :src="WeatherLogoDark" alt="" v-if="themeStore.theme === `dark`" />
          <img :src="WeatherLogoLight" alt="" v-if="themeStore.theme === `light`" />
        </div>

        <div class="flex gap-2 sm:gap-3">
          <ThemeToggle />
          <WeatherSetting />
        </div>
      </div>
    </Container>
  </header>
</template>
