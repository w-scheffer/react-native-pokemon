import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Image} from 'react-native';
import Text from 'components/Text/Text';

import {
  Container,
  TopView,
  MiddleView,
  BottomView,
  Input,
  NextIcon,
} from './styles';

const background = require('../../InitialPage/node_modules/assets/bg.png');
const next = require('assets/next.png');

const StepOne = ({navigation}) => {
  const [name, setName] = useState('');
  return (
    <Container>
      <ImageBackground source={background} style={styles.image}>
        <TopView>
          <Text>Hello, trainer Dev!</Text>
        </TopView>
        <MiddleView>
          <Text>... now tell us wich is your favorite Pokémon type: </Text>
          <Input onChangeText={(text) => setName(text)} value={name} />
        </MiddleView>
        <BottomView>
          <NextIcon onPress={() => navigation.navigate('InitialPage')}>
            <Image source={next} />
          </NextIcon>
        </BottomView>
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

export default StepOne;
