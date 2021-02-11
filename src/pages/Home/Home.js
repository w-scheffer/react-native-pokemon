import React, {useState} from 'react';
import {StyleSheet, FlatList, Image, TextInput} from 'react-native';
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
  const [type, SetType] = useState('flying');
  const [name, setName] = useState('');
  const [pokemons, setPokemons] = useState(Pokemon);

  const AlphabeticalFilter = () => {
    setTurnArrow(!turnArrow);
    pokemons.sort((a, b) =>
      turnArrow
        ? b.name.toLowerCase().localeCompare(a.name.toLowerCase())
        : a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    );
  };

  const FilterByType = ({item, index}) => {
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

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = pokemons.filter((item) => {
        const itemData = item.name ? item.name.toLowerCase() : ''.toLowerCase();
        const textData = text.toLowerCase();
        console.log(itemData);
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
      <Text>Pokemon Finder</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => searchFilterFunction(text)}
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
              style={turnArrow ? styles.arrowUp : styles.arrowDown}
            />
          </FilterByName>
        </MiddleView>
        <HorizontalLine />

        <FlatList
          data={pokemons}
          renderItem={FilterByType}
          keyExtractor={(item) => item.id.toString()}
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
