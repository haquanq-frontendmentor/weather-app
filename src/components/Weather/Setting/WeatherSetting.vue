<script setup lang="ts">
import { DropdownIcon, UnitsIcon } from "@/assets/images";
import Button from "@/components/common/Button.vue";
import {
  PRECIPITATION_UNIT_OPTIONS,
  SPEED_UNIT_OPTIONS,
  TEMPERATURE_UNIT_OPTIONS,
  UNIT_SYSTEM_OPTIONS,
} from "@/services/Weather/constants";
import { useWeatherSettingStore } from "@/stores/weatherSettingStore";
import { storeToRefs } from "pinia";
import { Popover } from "primevue";
import { useTemplateRef, watch } from "vue";
import WeatherSettingSelect from "./WeatherSettingSelect.vue";

const weatherSettingStore = useWeatherSettingStore();
const { selectedPrecipitationUnit, selectedTemperatureUnit, selectedUnitSystem, selectedWindSpeedUnit } =
  storeToRefs(weatherSettingStore);

watch(selectedUnitSystem, (unitSystem) => {
  if (unitSystem === UNIT_SYSTEM_OPTIONS.METRIC) {
    selectedTemperatureUnit.value = TEMPERATURE_UNIT_OPTIONS.CELSIUS;
    selectedWindSpeedUnit.value = SPEED_UNIT_OPTIONS.KILOMETERS_PER_HOUR;
    selectedPrecipitationUnit.value = PRECIPITATION_UNIT_OPTIONS.MILIMETER;
  } else if (unitSystem === UNIT_SYSTEM_OPTIONS.IMPERIAL) {
    selectedTemperatureUnit.value = TEMPERATURE_UNIT_OPTIONS.FAHRENHEIT;
    selectedWindSpeedUnit.value = SPEED_UNIT_OPTIONS.MILES_PER_HOUR;
    selectedPrecipitationUnit.value = PRECIPITATION_UNIT_OPTIONS.INCH;
  }
});

const popoverRef = useTemplateRef("popoverRef");
const firstButtonRef = useTemplateRef("firstButtonRef");

const togglePopover = (e: Event) => {
  popoverRef.value?.toggle(e);
  requestAnimationFrame(() => {
    firstButtonRef.value?.focus();
  });
};
</script>

<template>
  <div>
    <Button variant="secondary" type="button" aria-label="Change unit system" @click="togglePopover">
      <UnitsIcon />
      <span class="hidden sm:block">Units</span>
      <DropdownIcon class="" />
    </Button>
    <Popover ref="popoverRef" class="mt-2.5" aria-labelledby="popover-label">
      <div class="w-53.5 rounded-xl bg-white px-2 py-1.5 shadow-lg dark:bg-gray-800">
        <button
          id="popover-label"
          class="text-md w-full rounded-lg px-2 py-2.5 text-start text-gray-900 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          type="button"
          @click="weatherSettingStore.setSelectedUnitSystem()"
          ref="firstButtonRef"
        >
          Switch to
          {{ weatherSettingStore.selectedUnitSystem === UNIT_SYSTEM_OPTIONS.IMPERIAL ? "Metric" : "Imperial" }}
        </button>
        <div class="flex flex-col divide-y divide-gray-200 dark:divide-gray-600">
          <WeatherSettingSelect
            :options="[
              {
                label: `Celsius (°C)`,
                value: TEMPERATURE_UNIT_OPTIONS.CELSIUS,
              },
              {
                label: `Fahrenheit (°F)`,
                value: TEMPERATURE_UNIT_OPTIONS.FAHRENHEIT,
              },
            ]"
            label="Temperature"
            v-model="weatherSettingStore.selectedTemperatureUnit"
          />
          <WeatherSettingSelect
            :options="[
              {
                label: `km/h`,
                value: SPEED_UNIT_OPTIONS.KILOMETERS_PER_HOUR,
              },
              {
                label: `mph`,
                value: SPEED_UNIT_OPTIONS.MILES_PER_HOUR,
              },
            ]"
            label="Wind Speed"
            v-model="weatherSettingStore.selectedWindSpeedUnit"
          />
          <WeatherSettingSelect
            :options="[
              {
                label: `Millimeters (mm)`,
                value: PRECIPITATION_UNIT_OPTIONS.MILIMETER,
              },
              {
                label: `Inches (in)`,
                value: PRECIPITATION_UNIT_OPTIONS.INCH,
              },
            ]"
            label="Precipitation"
            v-model="weatherSettingStore.selectedPrecipitationUnit"
          />
        </div>
      </div>
    </Popover>
  </div>
</template>
