<script setup lang="ts">
import { cn } from "@/utils/cn";
import { Select } from "primevue";
import { computed, ref } from "vue";
import WeatherHourlyList from "./WeatherHourlyList.vue";

const sevenDaysFromNow = Array(7)
  .fill(new Date())
  .map((_, index) => new Date(new Date().getTime() + 86400000 * index));
const selectedDay = ref<Date>(sevenDaysFromNow[0] as Date);

const selectedDayIndex = computed(() => sevenDaysFromNow.findIndex((v) => v === selectedDay.value));
</script>

<template>
  <section
    class="h-full rounded-[1.25rem] bg-white px-[clamp(1rem,0.5229rem+2.0356vw,1.5rem)] py-[clamp(1.25rem,1.0115rem+1.0178vw,1.5rem)] shadow-lg shadow-blue-500/5 dark:bg-gray-800 dark:shadow-gray-900/50"
  >
    <div class="text-xl-semi-bold mb-4 flex items-center justify-between text-gray-900 dark:text-white">
      <h2>Hourly forecast</h2>
      <Select
        v-model="selectedDay"
        :options="sevenDaysFromNow"
        :default-value="selectedDay"
        :pt="{
          root: `bg-gray-100 relative cursor-pointer flex rounded-lg px-4 gap-3 text-md dark:bg-gray-600 h-9.25 items-center`,
          listContainer: {
            style: {
              maxHeight: `initial`,
            },
          },
          list: `flex flex-col gap-1 text-md h-fit`,
          label: `outline-none group`,
          overlay: `bg-white dark:bg-gray-800 w-53.5 shadow-lg inset-ring inset-ring-gray-200 dark:inset-ring-gray-600 shadow-2xl/80 text-gray-900 dark:text-white p-2 rounded-xl mt-2.5 h-max`,
          option: ({ context }) =>
            cn(
              `text-md py-2.5 px-2 rounded-lg cursor-pointer`,
              (context.selected || context.focused) && `bg-gray-100 dark:bg-gray-700`,
            ),
        }"
      >
        <template #value="slotProps">
          <p>{{ slotProps.value.toLocaleDateString("en-US", { weekday: "long" }) }}</p>
          <div
            class="absolute inset-0 rounded-lg group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-gray-800 dark:group-focus-visible:outline-gray-200"
          ></div>
        </template>
        <template #option="slotProps">
          {{ slotProps.option.toLocaleDateString("en-US", { weekday: "long" }) }}
        </template>
      </Select>
    </div>
    <WeatherHourlyList :selected-day-index="selectedDayIndex" />
  </section>
</template>
