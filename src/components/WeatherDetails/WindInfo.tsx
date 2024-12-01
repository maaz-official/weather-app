import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface WindInfoProps {
  speed: number;
  gusts: number;
  direction: string;
}

export const WindInfo: React.FC<WindInfoProps> = ({ speed, gusts, direction }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="wind" size={20} color="white" />
        <Text style={styles.title}>WIND</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.speedInfo}>
          <Text style={styles.speedValue}>{speed}</Text>
          <Text style={styles.speedUnit}>KM/H</Text>
          <Text style={styles.speedLabel}>Wind</Text>
        </View>
        <View style={styles.speedInfo}>
          <Text style={styles.speedValue}>{gusts}</Text>
          <Text style={styles.speedUnit}>KM/H</Text>
          <Text style={styles.speedLabel}>Gusts</Text>
        </View>
        <View style={styles.compass}>
          <Text style={styles.direction}>{direction}</Text>
        </View>
      </View>
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
    marginBottom: 16,
  },
  title: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  speedInfo: {
    flex: 1,
  },
  speedValue: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  speedUnit: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
  },
  speedLabel: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
    marginTop: 4,
  },
  compass: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  direction: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});