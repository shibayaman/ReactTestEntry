import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

import Button from './Button';

//TODO: animationをつけることで劇的にテストするのがむずくなってるので設計から考えなおしたい
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const TodoCard = styled.div`
  background-color: white;
  min-width: 15rem;
  text-align: center;
  margin-right: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgb(42, 191, 124);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  animation: ${({destorying}) => destorying ? fadeOut : fadeIn } 0.3s linear ;

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

export default ({ todo, removeTodo }) => {
  const { id, task, due, priority } = todo;
  const [hovered, setHovered] = useState(false);
  const [destorying, setDestorying] = useState(false);

  const trimTaskForDisplay = (task) => (
    (task.length > 20) ? task.substring(0, 20) + '...' : task
  );

  const handleDoneClick = () => {
    const requestDelete = async () => {
      const res = await axios.delete(`/api/todo/${id}`).catch((err) => {
        console.log(err.response.data);
      });

      if(res) {
        setDestorying(true);
      }
    };

    requestDelete();
  };

  const handleAnimationEnd = () => {
    if(destorying) {
      removeTodo(id);
    }
  };
  
  return(
    <TodoCard
      destorying={destorying}
      onAnimationEnd={handleAnimationEnd}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <MainTask>{!hovered ? trimTaskForDisplay(task) : task}</MainTask>
      <Info>
        <p>期限: {due}</p>
        <p>優先度: {priority}</p>
      </Info>
      <Actions>
        <Button bgColor="rgb(245, 130, 59)" onClick={handleDoneClick}>Done</Button>
      </Actions>
    </TodoCard>
  );
};