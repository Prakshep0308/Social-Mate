import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  name: string;
  image: string;
  isAdd?: boolean;
}

const StoryItem: React.FC<Props> = ({ name, image, isAdd }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 14,
  },
  imageWrapper: {
    borderWidth: 2,
    borderColor: '#3b82f6',
    borderRadius: 40,
    padding: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    marginTop: 6,
    fontSize: 12,
  },
});
