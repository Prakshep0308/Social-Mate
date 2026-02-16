import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LogoIcon } from '../utils/icons';

const HomeHeader = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <LogoIcon />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});
