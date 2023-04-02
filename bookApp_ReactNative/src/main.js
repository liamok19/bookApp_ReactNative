import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FindBook from '../src/FindBook.js';

const Main = () => {
  return (
    <View style={styles.mainComponent}>
      <View>
        <Text>Title</Text>
        <Text>by</Text>
        <FindBook />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainComponent: {backgroundColor: '#C5C5C5'},
});
export default Main;
