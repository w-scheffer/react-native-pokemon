import React, {useState} from 'react';
import {StyleSheet, FlatList, Image} from 'react-native';
import Text from 'components/Text/Text';
import Background from 'components/Background/Background';

const arrow = require('assets/arrow.png');

import PokemonTypes from 'api/PokemonTypes.json';
import Pokemon from 'api/Pokemon.json';

import {
  Container,
  ContentView,
  Header,
  TouchIcon,
  MiddleView,
  ArrowIcon,
  HorizontalLine,
  PokemonListView,
  Input,
} from './styles';

const Home = ({route}) => {
  const [turnArrow, setTurnArrow] = useState(false);
  const [type, SetType] = useState(route.params.type);
  const [name, setName] = useState('');
  const [pokemons, setPokemons] = useState(Pokemon);

  const filterByAlphabeticalOrder = () => {
    setTurnArrow(!turnArrow);
    pokemons.sort((a, b) =>
      turnArrow
        ? b.name.toLowerCase().localeCompare(a.name.toLowerCase())
        : a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    );
  };

  const filterByType = ({item}) => {
    if (item?.type[0] === type || item?.type[1] === type) {
      return (
        <>
          <PokemonListView>
            <Image
              style={styles.tinyLogo}
              source={{uri: item.thumbnailImage}}
            />
            <Text color={'#000'} textAlign={'left'} fontSize={'16px'}>
              {item.name}
            </Text>
          </PokemonListView>
          <HorizontalLine />
        </>
      );
    }
  };

  const filterByName = (text) => {
    if (text) {
      const newData = pokemons.filter((item) => {
        const itemData = item.name ? item.name.toLowerCase() : ''.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setPokemons(newData);
      setName(text);
    } else {
      setPokemons(Pokemon);
      setName(text);
    }
  };

  return (
    <Container>
      <Background>
        <Text margin={'16px 0 16px 0'} textAlign="center" color="#000">
          Pokemon Finder
        </Text>
        <Input
          onChangeText={(text) => filterByName(text)}
          placeholder="Find your pokémon"
          value={name}
        />
        <ContentView>
          <Header>
            <FlatList
              data={PokemonTypes.results}
              keyExtractor={(item) => item.name}
              horizontal={true}
              renderItem={({item}) => (
                <TouchIcon onPress={() => SetType(item.name)}>
                  <Image
                    style={styles.tinyLogo}
                    resizeMode={'cover'}
                    source={{uri: item.thumbnailImage}}
                  />
                  <Text color={'#000'} fontWeight={'bold'}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </Text>
                </TouchIcon>
              )}
            />
          </Header>
          <MiddleView>
            <Text color={'#000'}>Pokémon</Text>
            <ArrowIcon onPress={() => filterByAlphabeticalOrder()}>
              <Text color={'#000'} margin={'0 8px 0 0'}>
                Name
              </Text>
              <Image
                source={arrow}
                style={turnArrow ? styles.arrowUp : styles.arrowDown}
              />
            </ArrowIcon>
          </MiddleView>
          <HorizontalLine />

          <FlatList
            data={pokemons}
            renderItem={filterByType}
            keyExtractor={(item) => item.id.toString()}
          />
        </ContentView>
      </Background>
    </Container>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 80,
    height: 80,
  },
  arrowUp: {
    width: 20,
    height: 20,
  },
  arrowDown: {
    width: 20,
    height: 20,
    transform: [{rotate: '180deg'}],
  },
});

export default Home;
