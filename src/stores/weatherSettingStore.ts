import { defineStore } from "pinia";
import { ref } from "vue";

import {
    PRECIPITATION_UNIT_OPTIONS,
    SPEED_UNIT_OPTIONS,
    TEMPERATURE_UNIT_OPTIONS,
    UNIT_SYSTEM_OPTIONS,
} from "../services/Weather/constants";
import type { PrecipitationUnits, TemperatureUnits, UnitSystems, WindSpeedUnits } from "../services/Weather/types";

const useWeatherSettingStore = defineStore("weather-settings", () => {
    const selectedUnitSystem = ref<UnitSystems>(UNIT_SYSTEM_OPTIONS.METRIC);
    const selectedTemperatureUnit = ref<TemperatureUnits>(TEMPERATURE_UNIT_OPTIONS.CELSIUS);
    const selectedWindSpeedUnit = ref<WindSpeedUnits>(SPEED_UNIT_OPTIONS.KILOMETERS_PER_HOUR);
    const selectedPrecipitationUnit = ref<PrecipitationUnits>(PRECIPITATION_UNIT_OPTIONS.MILIMETER);

    const setSelectedUnitSystem = (value?: UnitSystems) => {
        if (value) {
            selectedUnitSystem.value = value;
        } else {
            selectedUnitSystem.value =
                selectedUnitSystem.value === UNIT_SYSTEM_OPTIONS.IMPERIAL
                    ? UNIT_SYSTEM_OPTIONS.METRIC
                    : UNIT_SYSTEM_OPTIONS.IMPERIAL;
        }
    };

    const setSelectedTemperatureUnit = (value: TemperatureUnits) => {
        selectedTemperatureUnit.value = value;
    };

    const setSelectedSpeedUnit = (value: WindSpeedUnits) => {
        selectedWindSpeedUnit.value = value;
    };

    const setSelectedPrecipitationUnit = (value: PrecipitationUnits) => {
        selectedPrecipitationUnit.value = value;
    };

    return {
        setSelectedPrecipitationUnit,
        setSelectedSpeedUnit,
        setSelectedUnitSystem,
        setSelectedTemperatureUnit,
        selectedPrecipitationUnit,
        selectedWindSpeedUnit,
        selectedTemperatureUnit,
        selectedUnitSystem,
    };
});

export { useWeatherSettingStore };
