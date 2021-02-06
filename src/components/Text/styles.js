import styled from 'styled-components/native';

export const StyledText = styled.Text`
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
    text-align: ${(props) => props.textAlign};
    text-decoration: ${(props) => props.textDecoration};
    margin: ${(props) => props.margin};
`;
