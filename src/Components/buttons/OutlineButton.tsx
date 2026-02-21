/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { typography } from '../../theme/typography';
import { useTheme } from '@react-navigation/native';

interface OutlineButtonProps {
  title: string;
  bgColor?: string;
  textColor?: string;
  onPress: () => void;
  icon?: React.ReactNode;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  title,
  bgColor,
  textColor,
  onPress,
  icon,
}) => {
  const { colors }: any = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.tab,
        {
          backgroundColor: bgColor ?? 'transparent',
          borderColor: colors.Secondary_text_color,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}

        <Text
          style={[
            typography.Medium16,
            { color: textColor ?? colors.Primary_text_color },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
});
