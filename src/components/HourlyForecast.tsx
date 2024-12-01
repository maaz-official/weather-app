import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';

interface HourlyForecastProps {
  hourlyData: Array<{
    time: string;
    temp: number;
    condition: string;
    icon: string;
  }>;
}

export const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourlyData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOURLY FORECAST</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hourlyData.map((hour, index) => (
          <View key={index} style={styles.hourContainer}>
            <Text style={styles.time}>{format(new Date(hour.time), 'ha')}</Text>
            <Ionicons name={hour.icon} size={24} color="white" />
            <Text style={styles.temp}>{Math.round(hour.temp)}°</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 16,
    marginVertical: 8,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  hourContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  time: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
  },
  temp: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
});