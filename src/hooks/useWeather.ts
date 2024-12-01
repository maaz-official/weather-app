import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { getWeatherByLocation } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [savedLocations, setSavedLocations] = useState<string[]>([]);

  useEffect(() => {
    loadSavedLocations();
    getCurrentLocationWeather();
  }, []);

  const loadSavedLocations = async () => {
    try {
      const saved = await AsyncStorage.getItem('savedLocations');
      if (saved) {
        setSavedLocations(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error loading saved locations:', error);
    }
  };

  const getCurrentLocationWeather = async () => {
    try {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const weather = await getWeatherByLocation(
        location.coords.latitude,
        location.coords.longitude
      );
      setWeatherData(weather);
    } catch (error) {
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  const saveLocation = async (locationName: string) => {
    try {
      const updatedLocations = [...savedLocations, locationName];
      await AsyncStorage.setItem('savedLocations', JSON.stringify(updatedLocations));
      setSavedLocations(updatedLocations);
    } catch (error) {
      console.error('Error saving location:', error);
    }
  };

  const removeLocation = async (locationName: string) => {
    try {
      const updatedLocations = savedLocations.filter(loc => loc !== locationName);
      await AsyncStorage.setItem('savedLocations', JSON.stringify(updatedLocations));
      setSavedLocations(updatedLocations);
    } catch (error) {
      console.error('Error removing location:', error);
    }
  };

  return {
    loading,
    error,
    weatherData,
    savedLocations,
    getCurrentLocationWeather,
    saveLocation,
    removeLocation,
  };
};