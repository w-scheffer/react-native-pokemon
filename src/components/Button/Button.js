import React from 'react';
import Text from 'components/Text/Text';
import PropTypes from 'prop-types';

import {StylizedButton} from './styles';

const Button = ({
  title,
  onPress,
  color,
  fontSize,
  fontWeight,
  background, // TO-DO - talvez remover
  height,
  width,
  margin,
}) => {
  return (
    <>
      <StylizedButton
        onPress={onPress}
        fontSize={fontSize}
        fontWeight={fontWeight}
        background={background}
        height={height}
        width={width}
        margin={margin}>
        <Text
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          textAlign="center">
          {title}
        </Text>
      </StylizedButton>
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  background: PropTypes.string,
  margin: PropTypes.string,
};

Button.defaultProps = {
  onPress: () => {},
  margin: '0 0 0 0',
  background: '#FF007f',
};

export default Button;
