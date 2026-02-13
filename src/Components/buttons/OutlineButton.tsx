/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { typography } from '../../theme/typography';
import { useTheme } from '@react-navigation/native';

interface OutlineButtonProps {
  title: string;
  bgColor?: string;
  textColor?: string;
  onPress: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  title,
  bgColor,
  textColor,
  onPress,
}) => {
  const colors: any = useTheme().colors;
  return (
    <TouchableOpacity
      style={[
        styles.tab,
        {
          backgroundColor: bgColor ? bgColor : 'transparent',
          borderWidth: 1,
          borderColor: colors.Secondary_text_color,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          color: textColor ? textColor : '#000',
          ...typography.Medium16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 40,
    justifyContent: 'center',
  },
});
