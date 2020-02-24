import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

import Todo from './components/Todo';

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const requestTasks = async () => {
      const res = await axios.get('/api/todo');
      setTodos(res.data.todo);
    }

    requestTasks();
  }, []);

  return (
    <TodoContainer>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </TodoContainer>
  )
}

render(<App />, document.getElementById('root'));