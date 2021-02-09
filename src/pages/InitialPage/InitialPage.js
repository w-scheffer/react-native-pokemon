import React from 'react';
import {Image} from 'react-native';
import Button from 'components/Button/Button';
import Background from 'components/Background/Background';

const pokemon = require('assets/pokemon-logo.png');
const finder = require('assets/finder.png');
const pikachu = require('assets/pikachu.png');

import {ImageView, ButtonView, PikachuView, Container} from './styles';

const InitialPage = ({navigation}) => {
  return (
    <Container>
      <Background>
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
      </Background>
    </Container>
  );
};

export default InitialPage;
