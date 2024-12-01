import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getWeatherByLocation = async (latitude: number, longitude: number) => {
  try {
    const response = await api.get('/weather/current', {
      params: { latitude, longitude },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

export const searchLocations = async (query: string) => {
  try {
    const response = await api.get('/weather/search', {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching locations:', error);
    throw error;
  }
};

export const saveLocation = async (location: { name: string; latitude: number; longitude: number }) => {
  try {
    const response = await api.post('/weather/locations', location);
    return response.data;
  } catch (error) {
    console.error('Error saving location:', error);
    throw error;
  }
};

export const getSavedLocations = async () => {
  try {
    const response = await api.get('/weather/locations');
    return response.data;
  } catch (error) {
    console.error('Error fetching saved locations:', error);
    throw error;
  }
};