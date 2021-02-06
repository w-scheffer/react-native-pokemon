import React from 'react';
import PropTypes from 'prop-types';

import {StyledText} from './styles';

const TextComponent = ({
    color,
    fontWeight,
    textAlign,
    fontSize,
    textDecoration,
    children,
    margin,
}) => {
    return (
        <>
            <StyledText
                color={color}
                fontWeight={fontWeight}
                fontSize={fontSize}
                textAlign={textAlign}
                textDecoration={textDecoration}
                margin={margin}>
                {children}
            </StyledText>
        </>
    );
};

TextComponent.propTypes = {
    color: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.string,
    textAlign: PropTypes.string,
    textDecoration: PropTypes.string,
    margin: PropTypes.string,
};

TextComponent.defaultProps = {
    color: '#ffffff',
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: '22px',
    textDecoration: 'none',
    margin: '0 0 0 0',
};

export default TextComponent;
