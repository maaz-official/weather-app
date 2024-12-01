import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { UVIndex } from '../components/WeatherDetails/UVIndex';
import { WindInfo } from '../components/WeatherDetails/WindInfo';
import { BannerAd } from '../components/ads/BannerAd';
import { showInterstitialAd } from '../components/ads/InterstitialAd';

export const WeatherDetailsScreen = ({ route }) => {
  const { data } = route.params;

  useEffect(() => {
    showInterstitialAd();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <BannerAd size="banner" />
      
      <View style={styles.content}>
        <UVIndex
          value={data?.current?.uv || 0}
          advice="Use sun protection until 4PM."
        />
        <WindInfo
          speed={data?.current?.wind_kph || 0}
          gusts={data?.current?.gust_kph || 0}
          direction={data?.current?.wind_dir || 'N'}
        />
      </View>
      
      <BannerAd size="mediumRectangle" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    padding: 16,
    gap: 16,
  },
});