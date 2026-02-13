import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

interface AuthInputProps extends TextInputProps {
  label: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({ label, ...props }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginBottom: 18,
    },
    label: {
      fontSize: 14,
      marginBottom: 6,
    },
    input: {
      height: 48,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 14,
      fontSize: 14,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>

      <TextInput
        {...props}
        placeholderTextColor={colors.border}
        style={[
          styles.input,
          {
            borderColor: colors.border,
            color: colors.text,
          },
        ]}
      />
    </View>
  );
};
