import React from 'react';
import { Wrapper, Content } from './styles'

function Button({ children, ...rest }) {
  return <Wrapper {...rest}><Content>{children}</Content></Wrapper>
}

export default Button;
