export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  high: number;
  low: number;
  time?: string;
}

export interface WeatherDetails {
  uvIndex: number;
  wind: {
    speed: number;
    gusts: number;
    direction: string;
  };
  sunset: string;
  sunrise: string;
  precipitation: {
    last24h: number;
    nextExpected: string;
  };
  humidity: number;
  visibility: number;
  feelsLike: number;
}