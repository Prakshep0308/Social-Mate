import { ViewStyle } from 'react-native';

export const getCardShadow = (shadowColor: string): ViewStyle => ({
  shadowColor,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.08,
  shadowRadius: 8,
  elevation: 3,
});
