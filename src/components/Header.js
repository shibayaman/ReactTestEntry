import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  margin: 1rem;
  color: rgb(33, 33, 33);
`

const Circled = styled.span`
  background-color: rgb(117, 195, 255);
  padding: 0.5rem;
  border-radius: 50%;
  color: black;
  margin-right: 0.2rem;
`;

const Underlined = styled.span`
  border-bottom: 4px solid rgb(117, 195, 255);
`

const SmallText = styled.span`
  font-size: 1rem;
`
export default () => {
  return(
    <H1>
      <Circled>と</Circled>
      <Circled>て</Circled>
      <Circled>も</Circled>
      <Underlined>シンプルなTodoアプリ</Underlined><SmallText>(くそあぷり)</SmallText>
    </H1>
  );
}