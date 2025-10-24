type GeoLocationDetail = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    featureCode: string;
    countryCode: string;
    timezone: string;
    population: number;
    postcodes: string[];
    countryId: number;
    countryName: string;
};

export type { GeoLocationDetail };
