<script setup lang="ts">
import { MoonIcon, SunIcon } from "../../assets/images";
import { useThemeStore } from "../../stores/themeStore";
import Button from "../common/Button.vue";
const themeStore = useThemeStore();
</script>

<template>
  <Button variant="secondary" square type="button" @click="themeStore.cycleThemes">
    <MoonIcon v-if="themeStore.theme === `dark`" />
    <SunIcon v-if="themeStore.theme === `light`" />
  </Button>
</template>
