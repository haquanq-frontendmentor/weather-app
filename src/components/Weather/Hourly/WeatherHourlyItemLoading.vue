<script setup lang="ts">
import { LoadingIcon } from "@/assets/images";
</script>

<template>
  <li
    class="darkinset-ring-gray-600 flex h-15 items-center justify-center gap-2 rounded-lg bg-white py-2.5 pr-4 pl-3 text-gray-900 inset-ring inset-ring-gray-200 dark:bg-gray-700 dark:text-white dark:inset-ring-gray-600"
  >
    <LoadingIcon class="animate-spin duration-500" />
  </li>
</template>
