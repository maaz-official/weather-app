import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface UVIndexProps {
  value: number;
  advice: string;
}

export const UVIndex: React.FC<UVIndexProps> = ({ value, advice }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="sunny" size={20} color="white" />
        <Text style={styles.title}>UV INDEX</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.description}>Very High</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${(value / 15) * 100}%` }]} />
      </View>
      <Text style={styles.advice}>{advice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
  },
  value: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 2,
    marginVertical: 8,
  },
  progress: {
    height: '100%',
    backgroundColor: '#FF9F0A',
    borderRadius: 2,
  },
  advice: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
  },
});