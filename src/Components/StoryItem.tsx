import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { typography } from '../theme/typography';

interface Props {
  name: string;
  image: any;
  profileImage?: string;
  isAdd?: boolean;
  isLive?: boolean;
}

const StoryItem: React.FC<Props> = ({
  name,
  image,
  profileImage,
  isAdd,
  isLive,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.storyCard}>
        {!isAdd ? (
          <Image
            source={typeof image === 'string' ? { uri: image } : image}
            style={styles.storyImage}
          />
        ) : (
          <View style={styles.addContainer} />
        )}

        {!!isLive && !isAdd && (
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        )}

        {isAdd ? (
          <View style={styles.plusButton}>
            <Text style={styles.plus}>+</Text>
          </View>
        ) : (
          <View style={styles.avatarWrapper}>
            <Image
              source={
                profileImage
                  ? { uri: profileImage }
                  : typeof image === 'string'
                  ? { uri: image }
                  : image
              }
              style={styles.avatar}
            />
          </View>
        )}
      </View>

      <Text style={{ ...typography.Regular12, marginTop: 24 }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 16,
    marginRight: 10,
  },

  storyCard: {
    width: 80,
    height: 115,
    borderRadius: 18,
    backgroundColor: '#E8E8E8',
    position: 'relative',
    justifyContent: 'flex-end',
    overflow: 'visible',
  },

  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },

  addContainer: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#3D3D3D',
    borderRadius: 18,
    backgroundColor: '#E8E8E8',
  },

  plusButton: {
    position: 'absolute',
    bottom: -20,
    alignSelf: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DCDCDC',
    borderWidth: 1,
    borderColor: '#3D3D3D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  plus: {
    fontSize: 30,
    lineHeight: 30,
    color: '#111111',
    fontWeight: '500',
  },

  avatarWrapper: {
    position: 'absolute',
    bottom: -22,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 22,
    backgroundColor: '#fff',
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  liveBadge: {
    position: 'absolute',
    top: 10,
    right: 8,
    backgroundColor: '#DADADA',
    borderWidth: 0.8,
    borderColor: '#3D3D3D',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 14,
  },

  liveText: {
    color: '#1A1A1A',
    fontSize: 10,
    fontWeight: '500',
  },
});
