import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Button from './Button';
import useTodoInputsState from './useTodoInputsState';

const Form = styled.form`
  display: inline-block;
  margin: 2rem;
  background-color: white;
  color: rgb(59, 59, 59);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
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
`;

export default ({ addTodo }) => {
  const [inputs, setInputs] = useTodoInputsState();
  const {task, due, priority} = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!(task && due && priority)) {
      return;
    }

    const requestCreate = async () => {
      const res = await axios.post('/api/todo', {
        task, due, priority
      }).catch((err) => {
        console.log(err.response.data);
      });

      if(res) {
        addTodo(res.data);
        setInputs({ task: '', due: '', priority: '' });
      }
    }

    requestCreate();
  };

  return (
    <Form onSubmit={handleSubmit} autocomplete="off">
      <Label htmlFor="taskInput">やること</Label>
      <TextInput type="text" id="taskInput" value={task} onChange={e => { setInputs({ task: e.target.value }) }} />
      <Label htmlFor="dueInput">期限</Label>
      <TextInput type="text" id="dueInput" value={due} onChange={e => { setInputs({ due: e.target.value }) }} />
      <Label htmlFor="priorityInput">優先度</Label>
      <TextInput type="text" id="priorityInput" value={priority} onChange={e => setInputs({ priority: e.target.value })} />
      <AlignRight>
        <Button bgColor="red" type="submit">Add</Button>
      </AlignRight>
    </Form>
  );
};