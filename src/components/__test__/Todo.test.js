import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import Todo from '../Todo';
import createTodo from './createDummyTodo'

afterEach(cleanup);

describe('rendering Todo Component', () => {
  it('should render into document', () => {
    const sampleTodo = createTodo();
    render(<Todo todo={sampleTodo}/>);
    expect(screen.getByText(sampleTodo.task)).toBeInTheDocument();
    expect(screen.getByText('期限: ' + sampleTodo.due)).toBeInTheDocument();
    expect(screen.getByText('優先度: ' + sampleTodo.priority)).toBeInTheDocument();
  });
});

describe('Task string in Todo card', () => {
  it('should not modify task string when its length <= 20', () => {
    const shortTask = 'abcdefghijklmnopqrst'  // 20 characters

    const todo = createTodo({task: shortTask}); 
    render(<Todo todo={todo} />);

    expect(screen.getByText(shortTask)).toBeInTheDocument();
  });

  it('should trim task string and add ... when its length > 20, and show full string when hovered', () => {
    const longTask = {
      original: 'abcdefghijklmnopqrstu',  // 21 characters
      trimmed: 'abcdefghijklmnopqrst...'
    }

    const todo = createTodo({task: longTask.original}); 
    const { container, getByText } = render(<Todo todo={todo} />);

    expect(getByText(longTask.trimmed)).toBeInTheDocument();

    fireEvent.mouseEnter(container.firstChild);
    expect(getByText(longTask.original)).toBeInTheDocument();

    fireEvent.mouseLeave(container.firstChild);
    expect(getByText(longTask.trimmed)).toBeInTheDocument();
  });
});
