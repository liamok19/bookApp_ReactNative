import React from 'react';
import {View, Text} from 'react-native';
import SearchBook from '../src/components/SearchBook';

const FindBook = () => {
  return (
    <View style={{backgroundColor: 'pink'}}>
      <Text>Find your book Bitch</Text>
      <SearchBook />
    </View>
  );
};

export default FindBook;
