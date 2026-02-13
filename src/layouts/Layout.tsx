import React, { ReactNode } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

type LayoutProps = {
  children: ReactNode;
  scroll?: boolean;
  padding?: boolean;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  scroll = false,
  padding = true,
}) => {
  const { colors, dark } = useTheme();

  const Container = scroll ? ScrollView : View;

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <StatusBar
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Container
          contentContainerStyle={scroll ? styles.scrollContainer : undefined}
          style={[styles.container, padding && styles.padding]}
        >
          {children}
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  padding: {
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
