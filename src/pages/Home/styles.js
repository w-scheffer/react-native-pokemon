import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const dim = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
`;

export const ContentView = styled.View`
  background-color: white;
  height: 90%;
`;

export const Header = styled.View`
  height: 20%;
  background-color: plum;
`;

export const TouchIcon = styled.TouchableOpacity``;
