/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { mobileW } from '../utils/Utils';

const Layout = ({ children, marginHorizontal, statusBarColor }: any) => {
  const colors: any = useTheme().colors;
  const scheme = useColorScheme();
  const insets = useSafeAreaInsets();
  return (
    // <View style={{flex:1, backgroundColor: colors.Custom_Header_Color}}>

    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor
          ? statusBarColor
          : colors.Background_Color,
      }}
      edges={['left', 'right']}
    >
      <View
        style={{
          flex: 1,
          // paddingTop: 16,
          backgroundColor: statusBarColor
            ? statusBarColor
            : colors.Background_Color,
        }}
      >
        <StatusBar
          hidden={false}
          translucent={true}
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          networkActivityIndicatorVisible={true}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: colors.Body_Color,
            marginHorizontal:
              marginHorizontal === 0 ? marginHorizontal : mobileW * 0.04076,
            // marginTop: mobileH * 0.01,
            marginTop: insets.top,
          }}
        >
          {children}
        </View>
      </View>
    </SafeAreaView>

    // </View>
  );
};

export default Layout;
