import React from 'react';
import { View, StyleSheet, TextInput, ScrollView, StatusBar, Text, ActivityIndicator } from 'react-native';
import { WeatherCard } from '../components/WeatherCard';
import { HourlyForecast } from '../components/HourlyForecast';
import { DailyForecast } from '../components/DailyForecast';
import { UVIndex } from '../components/WeatherDetails/UVIndex';
import { WindInfo } from '../components/WeatherDetails/WindInfo';
import { BannerAd } from '../components/ads/BannerAd';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useWeather } from '../hooks/useWeather';

export const HomeScreen = ({ navigation }) => {
  const { loading, error, weatherData, getCurrentLocationWeather } = useWeather();

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Weather</Text>
        <Ionicons name="ellipsis-horizontal" size={24} color="white" />
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="white" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a city or airport"
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
        />
        <Ionicons name="mic" size={20} color="white" />
      </View>
      <ScrollView style={styles.content}>
        <WeatherCard
          data={{
            location: weatherData?.location?.name || 'Unknown',
            temperature: weatherData?.current?.temp_c || 0,
            condition: weatherData?.current?.condition?.text || '',
            high: weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c || 0,
            low: weatherData?.forecast?.forecastday[0]?.day?.mintemp_c || 0,
          }}
          onPress={() => navigation.navigate('Details', { data: weatherData })}
        />
        
        <BannerAd size="banner" />
        
        <HourlyForecast
          hourlyData={weatherData?.forecast?.forecastday[0]?.hour?.map(hour => ({
            time: hour.time,
            temp: hour.temp_c,
            condition: hour.condition.text,
            icon: hour.condition.icon,
          })) || []}
        />
        
        <DailyForecast
          dailyData={weatherData?.forecast?.forecastday?.map(day => ({
            date: day.date,
            minTemp: day.day.mintemp_c,
            maxTemp: day.day.maxtemp_c,
            condition: day.day.condition.text,
            icon: day.day.condition.icon,
            precipitation: day.day.daily_chance_of_rain,
          })) || []}
        />
        
        <BannerAd size="mediumRectangle" />
        
        <View style={styles.detailsGrid}>
          <UVIndex
            value={weatherData?.current?.uv || 0}
            advice="Use sun protection until 4PM."
          />
          <WindInfo
            speed={weatherData?.current?.wind_kph || 0}
            gusts={weatherData?.current?.gust_kph || 0}
            direction={weatherData?.current?.wind_dir || 'N'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: Constants.statusBarHeight + 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: 16,
    padding: 12,
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  detailsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginVertical: 8,
  },
});