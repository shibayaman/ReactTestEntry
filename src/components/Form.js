import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Button from './Button';

const Form = styled.form`
  display: inline-block;
  margin: 2rem;
  background-color: white;
  color: rgb(59, 59, 59);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: left;
`;

const TextInput = styled.input`
  margin-bottom: 1rem;
  font-size: 1rem;
  width: 20rem;
  padding: 0.2rem;
  color: inherit;
`;

const AlignRight = styled.div`
  text-align: right;
`

export default ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [due, setDue] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestCreate = async () => {
      const res = await axios.post('/api/todo', {
        task, due, priority
      }).catch((err) => {
        console.log(err.response.data);
      });
      setTask('');
      setDue('');
      setPriority('');
      addTodo(res.data);
    }

    requestCreate();
  }

  return (
    <Form onSubmit={handleSubmit} autocomplete="off">
      <label htmlFor="taskInput">やること</label><br />
      <TextInput type="text" id="taskInput" value={task} onChange={e => { setTask(e.target.value) }} /><br />
      <label htmlFor="dueInput">期限</label><br />
      <TextInput type="text" id="dueInput" value={due} onChange={e => { setDue(e.target.value) }} /><br />
      <label htmlFor="priorityInput">優先度</label><br />
      <TextInput type="text" id="priorityInput" value={priority} onChange={e => { setPriority(e.target.value) }} /><br />
      <AlignRight>
        <Button bgColor="red" type="submit">Add</Button>
      </AlignRight>
    </Form>
  );
}