import {View, Text, Image} from 'react-native';
import React from 'react';
import FindBook from '../src/FindBook.js';

const Main = () => {
  return (
    <View>
      <View>
        <Text>Title</Text>
        <Text>by</Text>
        <Image
          style={{width: '50%', height: '50%', backgroundColor: 'orange'}}
          source={{
            uri: 'https://reactjs.org/logo-og.png',
          }}
        />
        <FindBook />
      </View>
    </View>
  );
};

export default Main;
