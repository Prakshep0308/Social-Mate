/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import MainButton from '../../Components/buttons/MainButton';
import OutlineButton from '../../Components/buttons/OutlineButton';
import { AuthInput } from '../../Components/buttons/Input';
import { LogoIcon, MessageIcon } from '../../utils/icons';
import { mobileH } from '../../utils/Utils';

const Login = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.row}>
          <MessageIcon />
          <LogoIcon />
        </View>

        <View style={styles.inputRow}>
          {/* Inputs */}
          <AuthInput
            label="E-mail/Phone"
            placeholder="Email/Phone"
            value={email}
            onChangeText={setEmail}
          />

          <AuthInput
            label="Password"
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={{ color: colors.primary }}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <MainButton
          title="Login"
          bgColor={colors.primary}
          textColor="#fff"
          onPress={() => console.log('Login Pressed')}
        />

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={[styles.line, { backgroundColor: colors.border }]} />
          <Text style={{ marginHorizontal: 10, color: colors.text }}>
            Or sign in with
          </Text>
          <View style={[styles.line, { backgroundColor: colors.border }]} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <OutlineButton
            title="Google"
            onPress={() => console.log('Google Login')}
          />
          <OutlineButton
            title="Microsoft"
            onPress={() => console.log('Microsoft Login')}
          />
        </View>

        {/* Bottom */}
        <View style={styles.bottomContainer}>
          <Text style={{ color: colors.text }}>Don’t have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: colors.primary }}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputRow: { marginTop: mobileH * (50 / mobileH) },
  inner: {
    paddingHorizontal: 16,
    paddingTop: 80,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
});
