import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/Navigation/RootNavigation';
import MainNavigator from './src/Navigation/MainNavigator';
import { theme } from './src/theme/theme';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const scheme: any = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={scheme === 'dark' ? theme.dark : theme.light}
        ref={navigationRef}
      >
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
