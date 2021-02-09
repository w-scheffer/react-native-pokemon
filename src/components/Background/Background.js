import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const background = require('assets/bg.png');

const Background = ({children}) => {
  return (
    <>
      <ImageBackground source={background} style={styles.image}>
        {children}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'space-between',
    zIndex: 0,
  },
});

export default Background;
