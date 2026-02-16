import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { CommentIcon, LikeIcon, SaveIcon, ShareIcon } from '../utils/icons';
import { typography } from '../theme/typography';

interface Props {
  name: string;
  time: string;
  caption: string;
  image: string;
}

const PostCard: React.FC<Props> = ({ name, time, caption, image }) => {
  const colors: any = useTheme().colors;

  const styles = StyleSheet.create({
    card: {
      borderRadius: 16,
      padding: 14,
      borderWidth: 1,
      marginBottom: 20,
      color: colors.Secondary_text_color,
    },
    header: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 17,
    },
    caption: {
      marginBottom: 10,
    },
    postImage: {
      width: '100%',
      height: 200,
      borderRadius: 12,
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },

    post: { flexDirection: 'row', gap: 22 },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
  });

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
        <View>
          <Text
            style={[
              typography.SemiBold18,
              { color: colors.Secondary_text_color },
            ]}
          >
            {name}
          </Text>
          <Text
            style={{
              ...typography.Regular12,
              color: colors.Secondary_text_color,
            }}
          >
            {time}
          </Text>
        </View>
      </View>

      <Text
        style={[
          styles.caption,
          typography.Regular14,
          { color: colors.Secondary_text_color },
        ]}
      >
        {caption}
      </Text>

      <Image source={{ uri: image }} style={styles.postImage} />
      <View style={styles.footer}>
        <View style={styles.post}>
          <View style={styles.icons}>
            <LikeIcon />
            <Text>1,964</Text>
          </View>
          <View style={styles.icons}>
            <CommentIcon />
            <Text>135</Text>
          </View>
          <View>
            <ShareIcon />
          </View>
        </View>
        <SaveIcon />
      </View>
    </View>
  );
};

export default PostCard;
