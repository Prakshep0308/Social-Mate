/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StatusBar, View, StatusBarStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {
  Edge,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { mobileH } from '../utils/Utils';

type LayoutProps = {
  children: React.ReactNode;
  statusBarColor?: string;
  barStyle?: StatusBarStyle;
  safeAreaEdges?: Edge[];
  contentBackgroundColor?: string;
};

const Layout = ({
  children,
  statusBarColor,
  barStyle = 'dark-content',
  safeAreaEdges = ['top', 'bottom', 'left', 'right'],
  contentBackgroundColor,
}: LayoutProps) => {
  const colors = useTheme().colors as any;
  const insets = useSafeAreaInsets();
  const containerColor = statusBarColor ?? colors.background;
  const contentColor = contentBackgroundColor ?? colors.background;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: containerColor,
        paddingBottom: insets.bottom + mobileH * (60 / mobileH),
      }}
      edges={safeAreaEdges}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: contentColor,
        }}
      >
        <StatusBar
          hidden={false}
          translucent={false}
          barStyle={barStyle}
          backgroundColor={containerColor}
          networkActivityIndicatorVisible={true}
        />
        <View style={{ flex: 1, backgroundColor: contentColor }}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Layout;
