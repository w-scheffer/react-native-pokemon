import React, {useState} from 'react';
import {Image} from 'react-native';
import Text from 'components/Text/Text';
import Background from 'components/Background/Background';

const next = require('assets/next.png');

import {
  Container,
  TopView,
  MiddleView,
  BottomView,
  Input,
  NextIcon,
} from './styles';

const StepOne = ({navigation}) => {
  const [name, setName] = useState('');
  return (
    <Container>
      <Background>
        <TopView>
          <Text>Hello, trainer Dev!</Text>
        </TopView>
        <MiddleView>
          <Text>... now tell us wich is your favorite Pokémon type: </Text>
          <Input onChangeText={(text) => setName(text)} value={name} />
        </MiddleView>
        <BottomView>
          <NextIcon onPress={() => navigation.navigate('Home')}>
            <Image source={next} />
          </NextIcon>
        </BottomView>
      </Background>
    </Container>
  );
};

export default StepOne;
