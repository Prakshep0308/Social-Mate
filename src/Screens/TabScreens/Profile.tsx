/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { typography } from '../../theme/typography';
import { Images } from '../../../assets';
import PostCard from '../../Components/PostCard';
import { mobileH, mobileW } from '../../utils/Utils';
import Layout from '../../layouts/Layout';
import MainButton from '../../Components/buttons/MainButton';

const Profile = () => {
  const colors: any = useTheme().colors;

  const stats = [
    { value: '100', label: 'Post' },
    { value: '10k', label: 'Followers' },
    { value: '64', label: 'Following' },
  ];
  const posts = [
    {
      id: 1,
      name: 'Kriston Watson',
      time: '08:39 am',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque id aenean.',
      image: Images.postImage2,
    },
    {
      id: 2,
      name: 'Kriston Watson',
      time: '08:39 am',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque id aenean.',
      image: Images.postImage,
    },
  ];

  const styles = StyleSheet.create({
    avatarWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: mobileW * (15 / mobileW),
      paddingTop: mobileH * (30 / mobileH),
    },
    avatarImage: {
      width: mobileW * (80 / mobileW),
      height: mobileH * (80 / mobileH),
      borderRadius: 40,
    },
    actions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginVertical: 18,
    },
    statsCard: {
      flexDirection: 'row',
      paddingVertical: 16,
      marginBottom: 18,
    },
    statItem: {
      flex: 1,
      alignItems: 'center',
      position: 'relative',
    },
    statDivider: {
      position: 'absolute',
      right: 0,
      top: 8,
      width: 1,
      height: 52,
      backgroundColor: colors.Border_color,
    },
    tabRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 16,
      gap: 22,
    },
    tabItem: {
      alignItems: 'center',
      minWidth: 130,
    },
    tabActive: {
      color: '#1E181F',
      fontSize: 36 / 2,
    },
    tabInactive: {
      color: '#A7A0A8',
      fontSize: 36 / 2,
    },
    activeIndicator: {
      marginTop: 6,
      width: 112,
      height: 3,
      borderRadius: 2,
      backgroundColor: '#241E24',
    },
    postCard: {
      backgroundColor: '#F8F2F4',
      borderWidth: 1,
      borderColor: '#E2D8DD',
      borderRadius: 14,
      padding: 14,
    },
    postHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    postAvatar: {
      width: 52,
      height: 52,
      borderRadius: 26,
      marginRight: 12,
    },
    postName: {
      color: '#181118',
      fontSize: 37 / 2,
    },
    postTime: {
      color: '#4E454E',
      fontSize: 30 / 2,
    },
    postText: {
      color: '#4A414A',
      marginBottom: 12,
      lineHeight: 22,
    },
    postImage: {
      width: '100%',
      height: 190,
      borderRadius: 10,
    },
  });

  return (
    <Layout>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 16,
          backgroundColor: colors.White_color,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.avatarWrapper}>
          <Image source={Images.storyImage} style={styles.avatarImage} />

          <View style={{ flexDirection: 'column' }}>
            <Text style={[typography.Medium18, { color: colors.Black_color }]}>
              Dave C. Brown
            </Text>
            <Text style={[typography.Regular12, { color: colors.Black_color }]}>
              @dave_brown
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              ...typography.Regular14,
              paddingTop: 5,
              color: colors.Black_color,
            }}
          >
            I’m a postive person. I love to travel and eat Always available for
            chat
          </Text>
        </View>

        <View style={styles.actions}>
          <MainButton
            title="Edit Profile"
            paddV={6}
            textStyle={typography.Medium14}
            bgColor={colors.Primary_color}
            onPress={() => {}}
          />

          <MainButton
            title="Share profile"
            textStyle={typography.Medium14}
            paddV={6}
            bgColor={colors.Primary_color}
            onPress={() => {}}
          />
        </View>

        <View style={styles.statsCard}>
          {stats.map((item, index) => (
            <View key={item.label} style={styles.statItem}>
              <Text
                style={[
                  typography.SemiBold28,
                  { color: colors.Secondary_text_color },
                ]}
              >
                {item.value}
              </Text>
              <Text style={[typography.Regular12]}>{item.label}</Text>
              {index !== stats.length - 1 && (
                <View style={styles.statDivider} />
              )}
            </View>
          ))}
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity activeOpacity={0.8} style={styles.tabItem}>
            <Text style={[typography.Medium26, styles.tabActive]}>Post</Text>
            <View style={styles.activeIndicator} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <PostCard
              name={item.name}
              time={item.time}
              caption={item.caption}
              image={item.image}
            />
          )}
        />
      </ScrollView>
    </Layout>
  );
};

export default Profile;
