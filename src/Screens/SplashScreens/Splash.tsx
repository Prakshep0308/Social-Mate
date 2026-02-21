import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LogoIcon, MessageIcon, SplashIcon } from '../../utils/icons';
import Layout from '../../layouts/Layout';

const Splash = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Layout barStyle="dark-content">
      <View style={styles.centerContainer}>
        <SplashIcon />
        <View style={styles.row}>
          <MessageIcon />
          <LogoIcon />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Splash;
