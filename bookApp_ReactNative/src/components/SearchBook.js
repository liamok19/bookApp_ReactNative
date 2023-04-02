import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
const staticImage = require('../images/bookTiles.png');

const SearchBook = () => {
  const [text, onChangeText] = useState('Useless Text');
  return (
    <View style={styles.row2}>
      <Text>Text Bitch once again</Text>
      <TextInput
        placeholder="Enter your desired book"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Image style={styles.imgSze} source={staticImage} alt="" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  imgSze: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    height: '50%',
  },
  row2: {
    // position: 'absolute',
    top: '10px',
  },
});

export default SearchBook;
