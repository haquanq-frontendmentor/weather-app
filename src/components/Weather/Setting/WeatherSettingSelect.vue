<script setup lang="ts" generic="T extends string = string">
import { CheckmarkIcon } from "../../../assets/images";

defineProps<{ options: { value: T; label: string }[]; label: string }>();
const model = defineModel();
</script>

<template>
  <fieldset class="py-1">
    <legend class="block px-2 pt-1.5 pb-2 text-sm text-gray-300">{{ label }}</legend>
    <div class="flex flex-col gap-1">
      <label
        class="text-md group relative flex cursor-pointer items-center justify-between rounded-lg px-2 py-2.5 text-gray-900 dark:text-white"
        v-for="option in options"
      >
        <input class="peer sr-only" type="radio" :name="label" v-model="model" :value="option.value" />
        <span
          class="absolute inset-0 rounded-[inherit] transition-colors group-hover:bg-gray-100 peer-checked:bg-gray-100 peer-focus-visible:outline peer-focus-visible:outline-offset-1 peer-focus-visible:outline-gray-800 dark:group-hover:bg-gray-700 dark:peer-checked:bg-gray-700 dark:peer-focus-visible:outline-gray-200"
        ></span>
        <span class="relative z-10">{{ option.label }}</span>
        <CheckmarkIcon class="relative z-10 hidden peer-checked:block" />
      </label>
    </div>
  </fieldset>
</template>
