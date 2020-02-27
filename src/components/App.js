import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Todo from './Todo';
import Form from './Form';
import Header from './Header';

const TodoContainer = styled.div`
  display: flex;
  overflow: scroll;
  padding: 1rem;
`;

export default () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const requestTasks = async () => {
      const res = await axios.get('/api/todo');
      setTodos(res.data.todo);
    };

    requestTasks();
  }, []);

  const removeTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  // const updateTodo = newTodo => {
  //   const newTodos = todos.map(todo => (
  //     todo.id === newTodo.id ? newTodo : todo
  //   ));
  //   setTodos(newTodos);
  // };

  const addTodo = newTodo => {
    const newTodos = [...todos];
    newTodos.unshift(newTodo);
    setTodos(newTodos);
  }

  return (
    <div>
      <Header />
      <TodoContainer>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
        ))}
      </TodoContainer>
      <Form addTodo={addTodo} />
    </div>
  )
}