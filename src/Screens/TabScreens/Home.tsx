/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HomeHeader from '../../Components/HomeHeader';
import StoryItem from '../../Components/StoryItem';
import PostCard from '../../Components/PostCard';
import Layout from '../../layouts/Layout';
import { Images } from '../../../assets';

const Home = () => {
  const { colors } = useTheme().colors;

  const stories = [
    {
      id: 1,
      name: 'Abdul',
      image: Images.storyImage,
      profileImage: 'https://i.pravatar.cc/100?img=1',
      isAdd: true,
    },
    {
      id: 2,
      name: 'Chris',
      image: Images.storyImage2,
      profileImage: 'https://i.pravatar.cc/100?img=2',
      isLive: true,
    },
    {
      id: 3,
      name: 'General',
      image: Images.storyImage,
      profileImage: 'https://i.pravatar.cc/100?img=3',
    },
    {
      id: 4,
      name: 'Ojogbon',
      image: Images.storyImage3,
      profileImage: 'https://i.pravatar.cc/100?img=4',
    },
    {
      id: 5,
      name: 'Chris',
      image: Images.storyImage2,
      profileImage: 'https://i.pravatar.cc/100?img=2',
    },
    {
      id: 6,
      name: 'General',
      image: Images.storyImage,
      profileImage: 'https://i.pravatar.cc/100?img=3',
    },
    {
      id: 7,
      name: 'Ojogbon',
      image: Images.storyImage3,
      profileImage: 'https://i.pravatar.cc/100?img=4',
    },
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
    {
      id: 3,
      name: 'Kriston Watson',
      time: '08:39 am',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque id aenean.',
      image: 'https://picsum.photos/600/400',
    },
    {
      id: 4,
      name: 'Kriston Watson',
      time: '08:39 am',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque id aenean.',
      image: 'https://picsum.photos/600/400',
    },
    {
      id: 5,
      name: 'Kriston Watson',
      time: '08:39 am',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque id aenean.',
      image: 'https://picsum.photos/600/400',
    },
  ];

  return (
    <Layout>
      <FlatList
        contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <HomeHeader />

            {/* Stories */}
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={stories}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <StoryItem
                  name={item.name}
                  image={item.image}
                  profileImage={item.profileImage}
                  isAdd={item.isAdd}
                  isLive={item.isLive}
                />
              )}
            />
          </View>
        }
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
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
