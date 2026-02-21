/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  CreatePostIcon,
  HomeIcon,
  PostIcon,
  SearchIcon,
  TabMessageIcon,
} from '../utils/icons';
import Home from '../Screens/TabScreens/Home';
import Profile from '../Screens/TabScreens/Profile';
import CreatePost from '../Screens/TabScreens/CreatePost';
import Message from '../Screens/TabScreens/Message';
import { mobileH } from '../utils/Utils';
import Explore from '../Screens/TabScreens/Explore';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const [showFabMenu, setShowFabMenu] = useState(false);
  const colors: any = useTheme().colors;

  return (
    // <SafeAreaView style={{flex: 1}}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: colors.TABBAR_TEXT_COLOR,
      }}
      tabBar={(props: any) => (
        <MyTabBar
          {...props}
          showFabMenu={showFabMenu}
          setShowFabMenu={setShowFabMenu}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }: any) =>
            focused ? <HomeIcon color={colors.Primary_color} /> : <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }: any) =>
            focused ? (
              <SearchIcon color={colors.Primary_color} />
            ) : (
              <SearchIcon />
            ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarIcon: ({ focused }: any) =>
            focused ? <PostIcon color={colors.Primary_color} /> : <PostIcon />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ focused }: any) =>
            focused ? (
              <TabMessageIcon color={colors.Primary_color} />
            ) : (
              <TabMessageIcon />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }: any) =>
            focused ? <HomeIcon color={colors.Primary_color} /> : <HomeIcon />,
        }}
      />
    </Tab.Navigator>
    // </SafeAreaView>
  );
}

const MyTabBar = ({ state, descriptors, navigation, setShowFabMenu }: any) => {
  const colors: any = useTheme().colors;
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    tabBarContainer: {
      width: '100%',
      flexDirection: 'row',
      backgroundColor: colors.White_color,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 0,
      gap: 22,
      paddingBottom: Math.max(insets.bottom),
      shadowColor: colors.BLACK_COLOR,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 9,
      height: insets.bottom + mobileH * (60 / mobileH),
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
    },
    tabItemCreate: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 53,
      height: 53,
      borderRadius: 53 / 2,
    },
  });

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const Icon = options.tabBarIcon;

        const onPress = () => {
          if (route.name === 'Create') {
            setShowFabMenu((prev: any) => !prev);
            return;
          }
          setShowFabMenu(false);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.tabItem}
          >
            {Icon({ focused: isFocused })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
