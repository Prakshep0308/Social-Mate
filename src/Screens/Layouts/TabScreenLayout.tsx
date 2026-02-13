import React from 'react';
import { View, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Images } from '../../../assets';

const TabScreenLayout = ({
  children,
  useSafeArea = true,
  statusBarStyle = 'light-content',
  statusBarBackgroundColor = 'transparent',
}) => {
  const Container = useSafeArea ? SafeAreaView : View;

  return (
    <ImageBackground
      source={Images.tabScreenBackground}
      style={styles.imageBackground}
      imageStyle={styles.image}
      resizeMode="cover"
    >
      <Container
        style={[
          styles.safeArea,
          // { paddingBottom: insets.bottom + mobileH * (40 / mobileH) },
        ]}
      >
        <StatusBar
          barStyle={statusBarStyle}
          backgroundColor={statusBarBackgroundColor}
          translucent
        />

        <View style={styles.contentWrapper}>{children}</View>
      </Container>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    // marginBottom: 30,
  },
});

export default TabScreenLayout;
