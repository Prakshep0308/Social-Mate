import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      Primary_color: '#0779B8',
      Primary_text_color: '#1D1A1A',
      Secondary_text_color: '#747474',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      Primary_color: '#0779B8',
      Primary_text_color: '#1D1A1A',
      Secondary_text_color: '#747474',
    },
  },
};
