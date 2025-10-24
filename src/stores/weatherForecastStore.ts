import { getWeatherForecast } from "@/services/Weather/getWeatherForecast";
import type { WeatherForecast } from "@/services/Weather/types";
import { getUserTimezone } from "@/utils/getUserTimezone";
import { useQuery } from "@tanstack/vue-query";
import { defineStore } from "pinia";
import { useGeoLocationStore } from "./geoLocationStore";
import { useWeatherSettingStore } from "./weatherSettingStore";

const INITIAL_VALUE = {
    current: {
        apparentTemparature: 0,
        humidity: 0,
        precipitation: 0,
        temperature: 0,
        time: new Date(),
        windSpeed: 0,
        weatherCode: 0,
    },
    daily: {
        durations: Array(7).fill(new Date()),
        maxTempratures: Array(7).fill(0),
        minTempratures: Array(7).fill(0),
        weatherCodes: Array(7).fill(0),
    },
    hourly: {
        durations: Array(168).fill(new Date()),
        temparatures: Array(168).fill(0),
        weatherCodes: Array(168).fill(0),
    },
} satisfies WeatherForecast;

const useWeatherForecastStore = defineStore("weather-forecast", () => {
    const {
        refetch: getForecast,
        data: forecast,
        isFetching: isFetchingForecast,
        isError,
    } = useQuery<WeatherForecast>({
        queryKey: ["weather-forecast"],
        enabled: false,
        initialData: INITIAL_VALUE,
        queryFn: async () => {
            const { selectedPrecipitationUnit, selectedWindSpeedUnit, selectedTemperatureUnit } =
                useWeatherSettingStore();
            const { selectedGeoLocation } = useGeoLocationStore();

            const data = await getWeatherForecast({
                latitute: selectedGeoLocation.latitude,
                longitue: selectedGeoLocation.longitude,
                precipitationUnit: selectedPrecipitationUnit,
                temperatureUnit: selectedTemperatureUnit,
                windSpeedUnit: selectedWindSpeedUnit,
                timezone: getUserTimezone(),
            });

            if (!data) return INITIAL_VALUE;

            return data;
        },
    });

    return { forecast, getForecast, isFetchingForecast, isError };
});

export { useWeatherForecastStore };
