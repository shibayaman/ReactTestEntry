import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const Div = styled.div`
  width: 15rem;
  height: 20rem;
  font-size: 1.5rem;
  background-color: peru;
`

export default (props) => (
  <Flex>
    <Div>{props.task}</Div>
  </Flex>
);