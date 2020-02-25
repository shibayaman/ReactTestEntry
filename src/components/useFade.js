//こちらのファイルはfadeinとfadeoutの機能をフック化したかったけど失敗した残骸でs。
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Div = styled.div`
  animation: ${({destroying}) => destroying ? fadeOut : fadeIn } 0.4s linear ;
`

export default (onDestoried) => {
  const [destroying, setDestroying] = useState(false);

  const fadeOut = () => {
    setDestroying(true);
  }

  const handleAnimationEnd = () => {
    if(destroying) {
      onDestoried();
    }
  }

  const FadeComponent = ({ children }) => (
    <Div destroying={destroying} onAnimationEnd={handleAnimationEnd}>
      {children}
    </Div >
  );

  return [FadeComponent, fadeOut];
}