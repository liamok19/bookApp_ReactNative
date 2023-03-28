import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const SearchBook = () => {
  const [text, onChangeText] = useState('Useless Text');
  return (
    <View>
      <Text>Text Bitch once again</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
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
});

export default SearchBook;
