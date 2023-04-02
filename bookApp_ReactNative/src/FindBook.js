import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBook from '../src/components/SearchBook';

const FindBook = () => {
  return (
    <View>
      <Text style={styles.row1}>Find your book Bitch</Text>
      <SearchBook />
    </View>
  );
};

const styles = StyleSheet.create({
  row1: {
    textAlign: 'center',
    marginBottom: '5%',
    marginTop: '20%',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
});

export default FindBook;
