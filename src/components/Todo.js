import React, { useState } from 'react';
import styled from 'styled-components';

const TodoCard = styled.div`
  background-color: white;
  width: 15rem;
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgb(42, 191, 124);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  :hover {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }
`;

const MainTask = styled.div`
  background-color: rgb(42, 191, 124);
  color: white;
  padding: 0.5rem;
  font-weight: bold;
`;

const Info = styled.div`
  color: rgb(59, 59, 59);
  padding: 0.5rem 0 0.5rem 3rem;
  text-align: left;
  border-bottom: 1px solid rgb(217, 217, 217);
`;

const Actions = styled.div`
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: ${({ bgColor }) => bgColor };
  font-size: 1rem;
  color: white;
  width: 5rem;
  padding: 0.2rem;
  border-radius: 0.5rem;
  margin: 0 0.5rem 0 0.5rem;
`;

export default ({ todo }) => {
  const trimTaskForDisplay = (task) => (
    (task.length > 20) ? task.substring(0, 20) + '...' : task
  );
  
  const [hovered, setHovered] = useState(false);

  console.log(hovered);
  return(
    <TodoCard onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <MainTask>{!hovered ? trimTaskForDisplay(todo.task) : todo.task}</MainTask>
      <Info>
        <p>期限: {todo.due}</p>
        <p>優先度: {todo.priority}</p>
      </Info>
      <Actions>
        <Button bgColor="rgb(42, 191, 124)">Done</Button>
        <Button bgColor="rgb(245, 130, 59)">Cancel</Button>
      </Actions>
    </TodoCard>
  );
};