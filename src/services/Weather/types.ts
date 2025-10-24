import {
    PRECIPITATION_UNIT_OPTIONS,
    SPEED_UNIT_OPTIONS,
    TEMPERATURE_UNIT_OPTIONS,
    UNIT_SYSTEM_OPTIONS,
} from "./constants";

type UnitSystems = (typeof UNIT_SYSTEM_OPTIONS)[keyof typeof UNIT_SYSTEM_OPTIONS];
type TemperatureUnits = (typeof TEMPERATURE_UNIT_OPTIONS)[keyof typeof TEMPERATURE_UNIT_OPTIONS];
type WindSpeedUnits = (typeof SPEED_UNIT_OPTIONS)[keyof typeof SPEED_UNIT_OPTIONS];
type PrecipitationUnits = (typeof PRECIPITATION_UNIT_OPTIONS)[keyof typeof PRECIPITATION_UNIT_OPTIONS];

type WeatherForecast = {
    current: {
        time: Date;
        temperature: number;
        apparentTemparature: number;
        humidity: number;
        windSpeed: number;
        precipitation: number;
        weatherCode: number;
    };
    daily: {
        durations: Date[];
        minTempratures: number[];
        maxTempratures: number[];
        weatherCodes: number[];
    };
    hourly: {
        durations: Date[];
        temparatures: number[];
        weatherCodes: number[];
    };
};

type WeatherForecastOptions = {
    temperatureUnit: TemperatureUnits;
    windSpeedUnit: WindSpeedUnits;
    precipitationUnit: PrecipitationUnits;
    timezone: string;
    longitue: number;
    latitute: number;
};

export type {
    PrecipitationUnits,
    TemperatureUnits,
    UnitSystems,
    WeatherForecast,
    WeatherForecastOptions,
    WindSpeedUnits,
};
