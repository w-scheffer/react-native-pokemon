import React from 'react';
import {ImageBackground, StyleSheet, Image} from 'react-native';
import {ImageView, ButtonView, PikachuView, Container} from './styles';
import Button from 'components/Button/Button';

const background = require('assets/bg.png');
const pokemon = require('assets/pokemon-logo.png');
const finder = require('assets/finder.png');
const pikachu = require('assets/pikachu.png');

const InitialPage = ({navigation}) => {
  return (
    <Container>
      <ImageBackground source={background} style={styles.image}>
        <ImageView>
          <Image source={pokemon} />
          <Image source={finder} />
        </ImageView>
        <ButtonView>
          <Button
            title={"Let's go!"}
            onPress={() => navigation.navigate('StepOne')}
          />
        </ButtonView>
        <PikachuView>
          <Image source={pikachu} />
        </PikachuView>
      </ImageBackground>
    </Container>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
});

export default InitialPage;
