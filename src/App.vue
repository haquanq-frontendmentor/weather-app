<script setup lang="ts">
import Header from "./components/Header/Header.vue";
import Weather from "./components/Weather/Weather.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <Header />
    <main>
      <Weather />
    </main>
  </div>
</template>
