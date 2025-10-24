<script setup lang="ts">
import { computed } from "vue";
import { cn } from "../../utils/cn";

const { variant = "primary", ...props } = defineProps<{
  class?: string;
  variant?: "primary" | "secondary";
  square?: boolean;
}>();

const baseClass = "shadow-lg shadow-blue-500/5  dark:shadow-gray-900/5";
const mergedClass = computed(() =>
  cn(
    baseClass,
    {
      "rounded-xl flex items-center justify-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500  px-6 bg-blue-500 hover:bg-blue-700 py-4 transition-[background-color] text-xl text-white":
        variant === "primary",
      "flex text-md hover:opacity-75 transition-[opacity] h-[clamp(2.0625rem,1.4661rem+2.5445vw,2.6875rem)] gap-[clamp(0.375rem,0.1365rem+1.0178vw,0.625rem)] px-[clamp(0.625rem,0.2672rem+1.5267vw,1rem)] items-center justify-center rounded-md bg-white text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 sm:rounded-lg dark:bg-gray-800 dark:text-white dark:focus-visible:outline-gray-200":
        variant === "secondary",
      "aspect-square px-0": props.square,
    },
    props.class,
  ),
);
</script>

<template>
  <button :class="mergedClass"><slot></slot></button>
</template>
