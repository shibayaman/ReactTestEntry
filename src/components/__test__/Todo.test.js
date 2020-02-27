import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from 'axios';

import Todo from '../Todo';

jest.mock('axios');
axios.delete.mockResolvedValue('dummy');

afterEach(() => {
  cleanup();
  axios.delete.mockClear();
});

afterEach(cleanup);

describe('rendering Todo Component', () => {
  it('should render into document', () => {
    const todo = { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' };
    const { getByText } = render(<Todo todo={todo}/>);
    expect(getByText('寝る')).toBeInTheDocument();
    expect(getByText('期限: 今すぐ')).toBeInTheDocument();
    expect(getByText('優先度: とても高い')).toBeInTheDocument();
  });
});

describe('Task string in Todo card', () => {
  it('should not modify task string when its length <= 20', () => {
    const shortTask = 'abcdefghijklmnopqrst'  // 20 characters

    const todo = { id: 0, task: shortTask, due: '今すぐ', priority: 'とても高い' };
    const { getByText } = render(<Todo todo={todo} />);

    expect(getByText(shortTask)).toBeInTheDocument();
  });

  it('should trim task string and add ... when its length > 20, and show full string when hovered', () => {
    const longTask = {
      original: 'abcdefghijklmnopqrstu',  // 21 characters
      trimmed: 'abcdefghijklmnopqrst...'
    }

    const todo = { id: 0, task: longTask.original, due: '今すぐ', priority: 'とても高い' };
    const { container, getByText } = render(<Todo todo={todo} />);

    expect(getByText(longTask.trimmed)).toBeInTheDocument();

    fireEvent.mouseEnter(container.firstChild);
    expect(getByText(longTask.original)).toBeInTheDocument();

    fireEvent.mouseLeave(container.firstChild);
    expect(getByText(longTask.trimmed)).toBeInTheDocument();
  });
});

describe('when done button is clicked', () => {
  test.todo('it should call removeTodo with its id');

  it('should send delete request with its id', async () => {
    const todo = { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' };

    const { getByText } = render(<Todo todo={todo} removeTodo={() => {}} />);
    fireEvent.click(getByText('Done'));
    await wait(() => {
      expect(axios.delete).toHaveBeenCalledWith(`/api/todo/0`);
    });
  });
});