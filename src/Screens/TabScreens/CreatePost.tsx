import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Layout from '../../layouts/Layout';

const CreatePost = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>CreatePost</Text>
      </View>
    </Layout>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
