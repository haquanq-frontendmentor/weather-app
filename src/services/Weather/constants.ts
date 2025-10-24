const UNIT_SYSTEM_OPTIONS = {
    IMPERIAL: "imperial",
    METRIC: "metric",
} as const;

const TEMPERATURE_UNIT_OPTIONS = {
    CELSIUS: "celsius",
    FAHRENHEIT: "fahrenheit",
} as const;

const SPEED_UNIT_OPTIONS = {
    MILES_PER_HOUR: "mph",
    KILOMETERS_PER_HOUR: "kmh",
    METERS_PER_SECOND: "ms",
    KNOTS: "k",
} as const;

const PRECIPITATION_UNIT_OPTIONS = {
    MILIMETER: "mm",
    INCH: "inch",
} as const;

export { PRECIPITATION_UNIT_OPTIONS, SPEED_UNIT_OPTIONS, TEMPERATURE_UNIT_OPTIONS, UNIT_SYSTEM_OPTIONS };
