/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { OnboardingIcon } from '../../utils/icons';
import { mobileH, mobileW } from '../../utils/Utils';
import { typography } from '../../theme/typography';
import { useNavigation, useTheme } from '@react-navigation/native';
import MainButton from '../../Components/buttons/MainButton';
import OutlineButton from '../../Components/buttons/OutlineButton';

const OnboardingScreen = () => {
  const colors: any = useTheme().colors;
  const navigation = useNavigation<any>();
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      key: 1,
      title: 'Find Friends & Get Inspiration',
      description:
        'Discover people with similar interests and get inspired by their stories and experiences.',
      icon: <OnboardingIcon />,
    },
    {
      key: 2,
      title: 'Meet Awesome People & Enjoy Yourself',
      description:
        'Connect, chat, and build meaningful friendships with amazing people around you.',
      icon: <OnboardingIcon />,
    },
    {
      key: 3,
      title: 'Hangout with Friends',
      description:
        'Plan meetups, share moments, and create unforgettable memories together.',
      icon: <OnboardingIcon />,
    },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / mobileW);
    setCurrentIndex(slideIndex);
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: mobileW * (currentIndex + 1),
        animated: true,
      });
    } else {
      navigation.navigate('Login');
    }
  };

  const handleSkip = () => {
    scrollViewRef.current?.scrollTo({
      x: mobileW * (slides.length - 1),
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      {/* Skip Button */}

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      >
        {slides.map((item, index) => (
          <View key={item.key} style={[styles.slide, { width: mobileW }]}>
            {item.icon}
            <Text
              style={{
                ...typography.Bold24,
                textAlign: 'center',
                marginTop: mobileH * (30 / mobileH),
                color: colors.Primary_text_color,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                ...typography.Regular14,
                textAlign: 'center',
                marginTop: mobileH * (10 / mobileH),
                color: colors.Secondary_text_color,
              }}
            >
              {item.description}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 16,
          gap: 10,
        }}
      >
        {currentIndex !== slides.length - 1 && (
          <OutlineButton
            onPress={handleSkip}
            title="Skip"
            textColor={colors.Primary_color}
          />
        )}
        <MainButton
          onPress={handleNext}
          title={currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
          bgColor={colors.Primary_color}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 18,
  },
});
