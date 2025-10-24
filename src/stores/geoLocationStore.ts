import { getLocations } from "@/services/GeoLocation/getLocations";
import type { GeoLocationDetail } from "@/services/GeoLocation/types";
import { useQuery } from "@tanstack/vue-query";
import { defineStore } from "pinia";
import { ref } from "vue";

const INITIAL_VALUE = {
    id: 2950159,
    name: "Berlin, Germany",
    latitude: 52.52437,
    longitude: 13.41053,
    elevation: 74,
    featureCode: "PPLC",
    countryCode: "DE",
    timezone: "Europe/Berlin",
    population: 3426354,
    postcodes: ["10967", "13347"],
    countryId: 2921044,
    countryName: "Germany",
};

const useGeoLocationStore = defineStore("geo-location", () => {
    const locationName = ref<string>("");
    const selectedGeoLocation = ref<GeoLocationDetail>(INITIAL_VALUE);

    const {
        data: locationSuggestions,
        isLoading,
        isFetching: isFetchingLocations,
        refetch: refetchLocations,
    } = useQuery<GeoLocationDetail[]>({
        queryKey: ["location-search"],
        queryFn: () => getLocations(locationName.value),
    });

    return {
        locationName,
        locationSuggestions,
        isLoading,
        refetchLocations,
        isFetchingLocations,
        selectedGeoLocation,
    };
});

export { useGeoLocationStore };
