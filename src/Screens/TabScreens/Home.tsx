import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HomeHeader from '../../Components/HomeHeader';
import CreatePostCard from '../../Components/CreatePostCard';
import StoryItem from '../../Components/StoryItem';
import PostCard from '../../Components/PostCard';
import Layout from '../../layouts/Layout';

const Home = () => {
  const { colors } = useTheme();

  const stories = [
    { id: 1, name: 'John', image: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Smith', image: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Ryan', image: 'https://i.pravatar.cc/150?img=3' },
  ];

  const posts = [
    {
      id: 1,
      name: 'Kriston Watson',
      time: '08:39 am',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque id aenean.',
      image: 'https://picsum.photos/600/400',
    },
    {
      id: 2,
      name: 'Kriston Watson',
      time: '08:39 am',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque id aenean.',
      image: 'https://picsum.photos/600/400',
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
        contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <HomeHeader />
            <CreatePostCard />

            {/* Stories */}
            <FlatList
              data={stories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <StoryItem name={item.name} image={item.image} />
              )}
              style={{ marginBottom: 20 }}
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
