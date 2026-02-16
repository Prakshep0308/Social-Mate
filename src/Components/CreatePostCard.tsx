import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

const CreatePostCard = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { borderColor: colors.border }]}>
      <View style={styles.topRow}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />
        <Text style={{ color: colors.text }}>What's on your head?</Text>
      </View>

      <View style={styles.actions}>
        <Text>🖼 Image</Text>
        <Text>🎬 Videos</Text>
        <Text>📎 Attach</Text>
      </View>
    </View>
  );
};

export default CreatePostCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
