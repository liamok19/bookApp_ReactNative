import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const staticImage = require('../images/bookTiles.png');

const Card = () => {
  return (
    <>
      <View style={styles.card}>
        <Image style={styles.imgIndividual} source={staticImage} alt="" />
        <View>
          <Text>React Js</Text>
          <Text>$3290</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'orange',
  },
  imgIndividual: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    marginTop: '5%',
  },
});

export default Card;
