import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  data: WeatherData;
  onPress?: () => void;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.location}>{data.location}</Text>
          {data.time && <Text style={styles.time}>{data.time}</Text>}
        </View>
        <View style={styles.content}>
          <Text style={styles.condition}>{data.condition}</Text>
          <Text style={styles.temperature}>{data.temperature}°</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.highLow}>H:{data.high}° L:{data.low}°</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 16,
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  time: {
    fontSize: 16,
    color: 'white',
  },
  content: {
    marginVertical: 8,
  },
  condition: {
    fontSize: 18,
    color: 'white',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  highLow: {
    fontSize: 16,
    color: 'white',
  },
});