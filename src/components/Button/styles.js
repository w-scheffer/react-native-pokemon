import styled from 'styled-components/native';

export const StylizedButton = styled.TouchableOpacity`
  border-radius: 5px;
  width: 80%;
  height: 50px;
  justify-content: center;
  background: ${(props) => props.background};
  margin: ${(props) => props.margin};
`;
