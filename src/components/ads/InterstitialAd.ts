import { AdMobInterstitial } from 'expo-ads-admob';

export const showInterstitialAd = async () => {
  try {
    await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ad unit ID
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  } catch (error) {
    console.error('Interstitial ad error:', error);
  }
};