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
import Card from '../components/Card';

const staticImage = require('../images/bookTiles.png');

const SearchBook = () => {
  // const [text, onChangeText] = useState('');
  const [search, setSearch] = useState('');

  const SearchBook = () => {
    console.log('test');
  };

  return (
    <View>
      <View style={styles.searchStyle}>
        <TextInput
          placeholder="Enter your desired book"
          style={styles.input}
          onChangeText={e => setSearch(SearchBook)}
          onKeyPress={searchBook}
          value={search}
        />
        <Button
          style={styles.btnSearch}
          onPress={() => Alert.alert('Button with adjusted color pressed')}
          title="Learn More"
          color="#cdebf9"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <Image style={styles.imgSze} source={staticImage} alt="" />
      <Text style={styles.txtSize}>Title by</Text>
      <View style={styles.container}>
        <Card />
        <Card />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: '#cdebf9',
    color: 'white',
    padding: 10,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  imgSze: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    height: '5%',
  },
  row2: {
    textAlign: 'center',
    // marginTop: 10,
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
  btnSearch: {
    backgroundColor: '#C5C5C5',
  },
  container: {
    // position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '90%',
    paddingLeft: '10%',
  },
});

export default SearchBook;
