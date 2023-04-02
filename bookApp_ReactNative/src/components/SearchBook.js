import React, {useState} from 'react';
import {
  Alert,
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

const staticImage = require('../images/bookTiles.png');

const SearchBook = () => {
  const [text, onChangeText] = useState('');
  return (
    <View>
      <View style={styles.searchStyle}>
        <TextInput
          placeholder="Enter your desired book"
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Button
          style={styles.btnSearch}
          onPress={() => Alert.alert('Button with adjusted color pressed')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <Image style={styles.imgSze} source={staticImage} alt="" />
      <Text style={styles.txtSize}>Title by</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  imgSze: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    height: '50%',
  },
  row2: {
    textAlign: 'center',
    marginTop: 10,
  },
  txtSize: {
    fontSize: 30,
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  searchStyle: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginLeft: '10%',
  },
});

export default SearchBook;
