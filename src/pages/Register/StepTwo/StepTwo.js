/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, FlatList, StyleSheet} from 'react-native';
import Text from 'components/Text/Text';
import Background from 'components/Background/Background';
import Modal from 'react-native-modal';
import Button from 'components/Button/Button';

const next = require('assets/next.png');
const close = require('assets/close.png');
const radioOn = require('assets/radio-on.png');
const radioOff = require('assets/radio-off.png');

import PokemonTypes from 'api/PokemonTypes.json';

import {
  Container,
  TopView,
  MiddleView,
  BottomView,
  NextIcon,
  ModalView,
  Header,
  HorizontalLine,
  TouchIcon,
  Close,
  RadioView,
  TypeView,
  ButtonView,
  TouchInput,
} from './styles';

const StepTwo = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [type, setType] = useState('normal');

  const name = route.params.name;

  return (
    <>
      <Container>
        <Background>
          <TopView>
            <Text>Hello, {name} !</Text>
          </TopView>
          <MiddleView>
            <Text>... Now tell us wich is your favorite Pokémon type:</Text>
            <TouchInput onPress={() => setModalVisible(!modalVisible)}>
              <Text color="#000" fontWeight="bold">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Text>
            </TouchInput>
          </MiddleView>
          <BottomView>
            <NextIcon
              onPress={() =>
                navigation.navigate('Home', {
                  type: type.toLowerCase(),
                })
              }>
              <Image source={next} />
            </NextIcon>
          </BottomView>
        </Background>
      </Container>
      <Modal
        style={{margin: 0, justifyContent: 'flex-end'}}
        isVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <ModalView>
          <Header>
            <Text color={'#000'} textAlign="left" fontSize="18px">
              Select your favorite pokémon type
            </Text>
            <Close onPress={() => setModalVisible(!modalVisible)}>
              <Image source={close} />
            </Close>
          </Header>
          <HorizontalLine />
          <FlatList
            data={PokemonTypes.results}
            keyExtractor={(item) => item.name}
            renderItem={({item, index}) => (
              <TouchIcon onPress={() => setType(item.name)}>
                <TypeView>
                  <Image
                    style={styles.tinyLogo}
                    resizeMode={'cover'}
                    source={{uri: item.thumbnailImage}}
                  />
                  <Text color={'#000'} fontWeight={'bold'} margin={'0 0 0 8px'}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </Text>
                </TypeView>
                <RadioView>
                  <Image
                    style={styles.radioButton}
                    resizeMode={'cover'}
                    source={item.name === type ? radioOn : radioOff}
                  />
                </RadioView>
              </TouchIcon>
            )}
          />
          <ButtonView>
            <Button
              title={'Confirm'}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ButtonView>
        </ModalView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 65,
    height: 65,
  },
  radioButton: {
    width: 35,
    height: 35,
  },
});

export default StepTwo;
