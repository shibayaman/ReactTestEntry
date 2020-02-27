import React from 'react';
import { render, cleanup, fireEvent, wait, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from 'axios';

import Form from '../Form';

jest.mock('axios');
axios.post.mockResolvedValue(
  { data: { task: 'a', due: 'b', pririty: 'c'} }
);

afterEach(() => {
  cleanup();
  axios.post.mockClear();
});

test.todo('it should send post request through axios');
test.todo('it should send request only when all of inputs are filled');
test.todo('it should call addTodo with "task, due, priority" when request returns 201');

describe('rendering Form Component', () => {
  it('should render into document', () => {
    const { getByLabelText } = render(<Form />);
    expect(getByLabelText('やること')).toBeInTheDocument();
  })
});

describe('Form functionality', () => {
  it('should send request and reset inputs only when all of inputs are filled', async () => {
    const { getByLabelText, getByText } = render(<Form addTodo={() => {}} />);

    fireEvent.change(getByLabelText('やること'), { target: { value: 'a' } });
    fireEvent.click(getByText('Add'));
    expect(axios.post).not.toBeCalled();

    fireEvent.change(getByLabelText('期限'), { target: { value: 'b' } });
    fireEvent.change(getByLabelText('優先度'), { target: { value: 'c' } });

    fireEvent.click(getByText('Add'));
    await wait(() => { 
      expect(getByLabelText('やること').value).toBe('');
      expect(getByLabelText('期限').value).toBe('');
      expect(getByLabelText('優先度').value).toBe('');
    });
    expect(axios.post).toHaveBeenCalledWith('/api/todo', { task: 'a', due: 'b', priority: 'c'});
  });

  it('should call addTodo with "task, due, priority" that axios resolved when request succeed', async () => {
    const addTodo = jest.fn();

    const { getByLabelText, getByText } = render(<Form addTodo={addTodo} />);
    fireEvent.change(getByLabelText('やること'), { target: { value: 'b' } });
    fireEvent.change(getByLabelText('期限'), { target: { value: 'd' } });
    fireEvent.change(getByLabelText('優先度'), { target: { value: 'e' } });
    fireEvent.click(getByText('Add'));

    await wait(() => { expect(addTodo).toBeCalled() });
    expect(addTodo).toHaveBeenCalledWith({ task: 'a', due: 'b', pririty: 'c'});
  });

  test.todo('should not call addTodo when request failed');
});