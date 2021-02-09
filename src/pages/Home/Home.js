import React from 'react';
import {StyleSheet, FlatList, Image} from 'react-native';

import PokemonTypes from 'api/PokemonTypes.json';

import {
  Container,
  ContentView,
  Header,
  HorizontalScroll,
  TouchIcon,
} from './styles';

const Home = () => {
  const pokemonTypes = PokemonTypes;
  return (
    <>
      <FlatList
        data={pokemonTypes.results}
        keyExtractor={(item) => item.name}
        horizontal={true}
        renderItem={({item}) => (
          <TouchIcon>
            <Image
              style={styles.tinyLogo}
              resizeMode={'cover'}
              source={{uri: item.thumbnailImage}}
            />
          </TouchIcon>
        )}
      />

      {/* </ImageBackground> */}
    </>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 80,
    height: 80,
  },
});

export default Home;
