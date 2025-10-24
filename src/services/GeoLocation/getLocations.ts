import type { GeoLocationDetail } from "./types";

export const getLocations = async (locationName: string): Promise<Array<GeoLocationDetail>> => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(locationName)}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.results) return [];

    /// @ts-ignore
    return data.results.map((v) => ({
        id: v.id,
        name: v.name + ", " + v.country,
        countryCode: v.country_code,
        countryId: v.country_id,
        countryName: v.country,
        elevation: v.elevation,
        featureCode: v.feature_code,
        latitude: v.latitude,
        longitude: v.longitude,
    }));
};
