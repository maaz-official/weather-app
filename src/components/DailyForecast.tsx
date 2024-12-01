import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';

interface DailyForecastProps {
  dailyData: Array<{
    date: string;
    minTemp: number;
    maxTemp: number;
    condition: string;
    icon: string;
    precipitation: number;
  }>;
}

export const DailyForecast: React.FC<DailyForecastProps> = ({ dailyData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>10-DAY FORECAST</Text>
      {dailyData.map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <View style={styles.dayInfo}>
            <Text style={styles.day}>
              {index === 0 ? 'Today' : format(new Date(day.date), 'EEE')}
            </Text>
            <Ionicons name={day.icon} size={24} color="white" />
          </View>
          <View style={styles.tempContainer}>
            {day.precipitation > 0 && (
              <Text style={styles.precipitation}>{day.precipitation}%</Text>
            )}
            <View style={styles.tempBar}>
              <Text style={styles.temp}>{Math.round(day.minTemp)}°</Text>
              <View style={styles.bar} />
              <Text style={styles.temp}>{Math.round(day.maxTemp)}°</Text>
            </View>
          </View>
        </View>
      ))}
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
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  dayInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  day: {
    color: 'white',
    fontSize: 16,
    width: 60,
  },
  tempContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  precipitation: {
    color: 'white',
    fontSize: 14,
    marginRight: 8,
  },
  tempBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
  },
  temp: {
    color: 'white',
    fontSize: 16,
  },
  bar: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 8,
    borderRadius: 2,
  },
});