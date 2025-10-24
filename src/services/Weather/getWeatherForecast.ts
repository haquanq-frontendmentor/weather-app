import { fetchWeatherApi } from "openmeteo";
import type { WeatherForecast, WeatherForecastOptions } from "./types";

export const getWeatherForecast = async (options: WeatherForecastOptions) => {
    const params = {
        latitude: options.latitute,
        longitude: options.longitue,
        timezone: options.timezone,
        wind_speed_unit: options.windSpeedUnit,
        temperature_unit: options.temperatureUnit,
        precipitation_unit: options.precipitationUnit,
        daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
        hourly: ["temperature_2m", "weather_code"],
        current: [
            "temperature_2m",
            "relative_humidity_2m",
            "apparent_temperature",
            "precipitation",
            "wind_speed_10m",
            "weather_code",
        ],
    };

    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    if (!response) return null;

    // Attributes for timezone and location
    const latitude = response.latitude();
    const longitude = response.longitude();
    const elevation = response.elevation();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const utcOffsetSeconds = response.utcOffsetSeconds();

    console.log(
        `\nCoordinates: ${latitude}°N ${longitude}°E`,
        `\nElevation: ${elevation}m asl`,
        `\nTimezone: ${timezone} ${timezoneAbbreviation}`,
        `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
    );

    const current = response.current()!;
    const hourly = response.hourly()!;
    const daily = response.daily()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData: WeatherForecast = {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature: current.variables(0)!.value(),
            humidity: current.variables(1)!.value(),
            apparentTemparature: current.variables(2)!.value(),
            precipitation: current.variables(3)!.value(),
            windSpeed: current.variables(4)!.value(),
            weatherCode: current.variables(5)!.value(),
        },
        hourly: {
            durations: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
                (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000),
            ),
            temparatures: (hourly.variables(0)!.valuesArray() || [])?.map((v) => parseInt(v.toString())) as number[],
            weatherCodes: (hourly.variables(1)!.valuesArray() || [])?.map((v) => parseInt(v.toString())) as number[],
        },
        daily: {
            durations: [...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval())].map(
                (_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000),
            ),
            weatherCodes: (daily.variables(0)!.valuesArray() || []).map((v) => parseInt(v.toString())) as number[],
            maxTempratures: (daily.variables(1)!.valuesArray() || []).map((v) => parseInt(v.toString())) as number[],
            minTempratures: (daily.variables(2)!.valuesArray() || []).map((v) => parseInt(v.toString())) as number[],
        },
    };

    return weatherData;
};
