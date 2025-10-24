<script setup lang="ts">
import { cn } from "@/utils/cn";
import { AutoComplete, type AutoCompleteChangeEvent } from "primevue";
import { LoadingIcon, SearchIcon } from "@/assets/images";
import { storeToRefs } from "pinia";
import CountryFlag from "vue-country-flag-next";
import { useGeoLocationStore } from "@/stores/geoLocationStore";
import Button from "../common/Button.vue";
import type { GeoLocationDetail } from "@/services/GeoLocation/types";
import { watch } from "vue";

const geoLocationStore = useGeoLocationStore();
const { locationName, locationSuggestions, selectedGeoLocation, isFetchingLocations } = storeToRefs(geoLocationStore);

const handleChange = (e: AutoCompleteChangeEvent) => {
  const data = e.value as GeoLocationDetail;
  if (data instanceof Object) {
    selectedGeoLocation.value = data;
  }
};

const DEBOUNCE_DELAY = 500;
let previousRequestTimeoutKey: NodeJS.Timeout | undefined;

watch(locationName, () => {
  if (previousRequestTimeoutKey) clearTimeout(previousRequestTimeoutKey);
  previousRequestTimeoutKey = setTimeout(() => {
    geoLocationStore.refetchLocations();
  }, DEBOUNCE_DELAY);
});
</script>

<template>
  <form class="mx-auto flex max-w-164 flex-wrap gap-3" @submit.prevent="">
    <div class="relative flex min-w-[min(25rem,100%)] grow-999 items-center">
      <SearchIcon class="absolute left-6 z-10 text-gray-500 dark:text-gray-200" />
      <AutoComplete
        v-model="locationName"
        :suggestions="locationSuggestions"
        placeholder="Search for a place..."
        option-label="name"
        @change="handleChange"
        :min-length="2"
        overlay-class="bg-white dark:bg-gray-800 shadow-lg text-gray-900 dark:text-white p-2 rounded-xl mt-2.5 h-max overflow-y-scroll overflow-x-hidden"
        input-class="h-14 w-full grow text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 dark:focus-visible:outline-gray-200 dark:text-white rounded-xl pl-15 placeholder:text-gray-500 dark:placeholder:text-gray-200"
        class="w-full rounded-xl bg-white text-xl shadow-lg shadow-blue-500/5 dark:bg-gray-800 dark:shadow-gray-900/5"
        :pt="{
          list: `flex flex-col gap-1 text-md h-fit`,
          overlay: ``,
          option: ({ context }) =>
            cn(
              `text-md py-2.5 px-2 rounded-lg cursor-pointer`,
              (context.selected || context.focused) && `bg-gray-100 dark:bg-gray-700`,
            ),
        }"
      >
        <template #option="slotprops">
          <div class="flex items-center gap-3">
            <CountryFlag :country="slotprops.option.countryCode" size="small" />
            <p>
              {{ `${slotprops.option.name} (${slotprops.option.countryCode})` }}
            </p>
          </div>
        </template>
        <template #empty>
          <div class="text-sm">
            <div class="flex justify-center gap-3" v-if="isFetchingLocations">
              <LoadingIcon class="animate-spin duration-300" />
              <p>Search in progress</p>
            </div>
            <div class="flex justify-center py-2 text-center" v-else>
              <p>No results found!</p>
            </div>
          </div>
        </template>
      </AutoComplete>
    </div>
    <Button class="grow" type="submit">Search</Button>
  </form>
</template>
