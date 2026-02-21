import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      Primary_color: '#0779B8',
      Primary_text_color: '#1D1A1A',
      Primary_color_light: '#cde4f0',
      Primary_border_color: '#056093',
      Secondary_text_color: '#747474',
      Black_color: '#000',
      White_color: '#fff',
      Border_color: '#1D1A1A1A',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      Primary_color: '#0779B8',
      Primary_text_color: '#1D1A1A',
      Primary_color_light: '#cde4f0',
      Primary_border_color: '#04486e',
      Secondary_text_color: '#747474',
      Black_color: '#fff',
      White_color: '#000',
      Border_color: '#1D1A1A1A',
    },
  },
};
