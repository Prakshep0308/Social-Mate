/* eslint-disable react-native/no-inline-styles */
import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import React from 'react';
import { typography } from '../../theme/typography';

interface MainButtonProps {
  title: string;
  bgColor?: string;
  textColor?: string;
  onPress: () => void;
  paddV?: DimensionValue;
  textStyle?: TextStyle; // ✅ better than string
}

const MainButton: React.FC<MainButtonProps> = ({
  title,
  bgColor = '#000',
  onPress,
  textColor = '#fff',
  paddV = 16,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.tab, { backgroundColor: bgColor, paddingVertical: paddV }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[typography.Medium16, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 40,
    justifyContent: 'center',
  },
});
