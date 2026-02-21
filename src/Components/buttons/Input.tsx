import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { typography } from '../../theme/typography';

interface AuthInputProps extends TextInputProps {
  label?: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({ label, ...props }) => {
  const colors: any = useTheme().colors;

  const styles = StyleSheet.create({
    container: {
      marginBottom: 18,
    },
    input: {
      height: 48,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 14,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[typography.Regular12, { marginBottom: 5 }]}>{label}</Text>

      <TextInput
        {...props}
        placeholderTextColor={colors.border}
        style={[
          typography.Regular14,
          styles.input,
          {
            borderColor: colors.Border_color,
            color: colors.text,
          },
        ]}
      />
    </View>
  );
};
