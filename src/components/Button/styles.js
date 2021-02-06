import styled from 'styled-components/native';

export const StylizedButton = styled.TouchableOpacity`
  border-radius: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: center;
  background: ${(props) => props.background};
  margin: ${(props) => props.margin};
`;
