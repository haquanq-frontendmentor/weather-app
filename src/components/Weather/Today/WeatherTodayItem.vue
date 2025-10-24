<script setup lang="ts">
defineProps<{ label: string; value: string }>();
</script>

<template>
  <li
    class="relative flex h-29.5 flex-col justify-between rounded-xl bg-white p-5 inset-ring inset-ring-blue-200 dark:bg-gray-800 dark:inset-ring-gray-600"
  >
    <p class="text-lg text-gray-700 dark:text-gray-200">{{ label }}</p>
    <span class="text-3xl text-gray-900 dark:text-white">{{ value }}</span>
  </li>
</template>
