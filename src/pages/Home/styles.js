import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContentView = styled.View`
  flex: 1;
  margin: 32px 0 0 0px;
  background-color: white;
  height: 90%;
`;

export const Header = styled.View`
  height: 20%;
  justify-content: center;
  margin-left: 16px;
  margin-top: 16px;
`;

export const TouchIcon = styled.TouchableOpacity`
  margin-right: 16px;
  align-items: center;
`;

export const MiddleView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 16px 0 16px;
`;

export const ArrowIcon = styled.TouchableOpacity`
  flex-direction: row;
`;

export const HorizontalLine = styled.View`
  background-color: green;
  height: 1px;
`;

export const PokemonListView = styled.View`
  margin-left: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-bottom-color: white;
  border-bottom-width: 2px;
  padding: 0 32px 0 32px;
`;
