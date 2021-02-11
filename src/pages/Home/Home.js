import React, {useState} from 'react';
import {StyleSheet, FlatList, Image} from 'react-native';
import Text from 'components/Text/Text';

const arrow = require('assets/arrow.png');

import PokemonTypes from 'api/PokemonTypes.json';
import Pokemon from 'api/Pokemon.json';

import {
  Container,
  ContentView,
  Header,
  TouchIcon,
  MiddleView,
  FilterByName,
  HorizontalLine,
  PokemonListView,
} from './styles';

const Home = () => {
  const [turnArrow, setTurnArrow] = useState(false);
  const [type, SetType] = useState('normal');
  const [pokemons, setPokemons] = useState();

  const AlphabeticalFilter = () => {
    setTurnArrow(!turnArrow);
    pokemons.sort();
  };

  const FilterByType = ({item, index}) => {
    if (item?.type[0] === type || item?.type[1] === type) {
      setPokemons(item.name);
      console.log(pokemons);
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

  return (
    <Container>
      <Text>Pokemon Finder</Text>
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
                  {item.name}
                </Text>
              </TouchIcon>
            )}
          />
        </Header>
        <MiddleView>
          <Text color={'#000'}>Pokémon</Text>
          <FilterByName onPress={() => AlphabeticalFilter()}>
            <Text color={'#000'} margin={'0 8px 0 0'}>
              Name
            </Text>
            <Image
              source={arrow}
              style={turnArrow ? styles.arrowDown : styles.arrowUp}
            />
          </FilterByName>
        </MiddleView>
        <HorizontalLine />

        <FlatList
          data={Pokemon}
          renderItem={FilterByType}
          initialNumToRender={10}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </ContentView>
    </Container>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 80,
    height: 80,
  },
  arrowUp: {
    width: 24,
    height: 24,
  },
  arrowDown: {
    width: 24,
    height: 24,
    transform: [{rotate: '180deg'}],
  },
});

export default Home;
