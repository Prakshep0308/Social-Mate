import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LogoIcon, NotificationIcon } from '../utils/icons';

const HomeHeader = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <LogoIcon width={175} height={28} />

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <TouchableOpacity>
          <NotificationIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
