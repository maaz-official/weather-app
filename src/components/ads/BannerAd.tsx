import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';

interface BannerAdProps {
  size?: 'banner' | 'largeBanner' | 'mediumRectangle' | 'fullBanner' | 'leaderboard' | 'smartBannerPortrait';
}

export const BannerAd: React.FC<BannerAdProps> = ({ size = 'smartBannerPortrait' }) => {
  const bannerError = (error: string) => {
    console.error('Ad error:', error);
  };

  return (
    <View style={styles.container}>
      <AdMobBanner
        bannerSize={size}
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ad unit ID
        servePersonalizedAds
        onDidFailToReceiveAdWithError={bannerError}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
});