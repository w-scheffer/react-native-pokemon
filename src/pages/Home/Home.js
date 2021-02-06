import React from 'react';
import {ImageBackground, View, StyleSheet, Image} from 'react-native';
import {ImageView} from './styles';
import Button from 'components/Button/Button';

const background = require('assets/bg.png');
const pokemon = require('assets/pokemon-logo.png');
const finder = require('assets/finder.png');

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <ImageView>
          <Image source={pokemon} />
          <Image source={finder} />
        </ImageView>
      </ImageBackground>
      <Button title={"Let's go!"} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Home;
