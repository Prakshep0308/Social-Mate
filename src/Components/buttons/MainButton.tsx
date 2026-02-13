import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { typography } from '../../theme/typography';

interface MainButtonProps {
  title: string;
  bgColor?: string;
  textColor?: string;
  onPress: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({
  title,
  bgColor,
  onPress,
  textColor,
}) => {
  return (
    <TouchableOpacity
      style={[styles.tab, { backgroundColor: bgColor ? bgColor : '#000' }]}
      onPress={onPress}
    >
      <Text
        style={{
          color: textColor ? textColor : '#fff',
          ...typography.Medium16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 40,
    justifyContent: 'center',
  },
});
