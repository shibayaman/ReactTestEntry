import React from 'react';
import { render, cleanup, act } from '@testing-library/react';

import useTodoInputsState from '../useTodoInputsState'

const TestHook = ({callback}) => {
  callback();
  return null;
}

const testHook = callback => {
  render(<TestHook callback={callback} />);
};

afterEach(cleanup);

describe('useTodoInputsState state management', () => {
  it('should initialize with given value or empty string', () => {
    let state, setInputs;
    testHook(() => ([state, setInputs] = useTodoInputsState({ task: 'mytask' })));
    expect(state).toEqual({ task: 'mytask', due: '', priority: '' });
  });

  it('should mutate state like object.asigin', () => {
    let state, setInputs;
    testHook(() => ([state, setInputs] = useTodoInputsState()));
  
    act(() => {
      setInputs({ task: 'mytask' });
    });
    expect(state).toEqual({ task: 'mytask', due: '', priority: '' });
  
    act(() => {
      setInputs({ due: 'mydue' });
    });
    expect(state).toEqual({ task: 'mytask', due: 'mydue', priority: '' });
  
    act(() => {
      setInputs({ priority: 'mypriority' });
    });
    expect(state).toEqual({ task: 'mytask', due: 'mydue', priority: 'mypriority' });
  });

  it('should only care about "task, due, priority"', () => {
    let state, setInputs;
    testHook(() => ([state, setInputs] = useTodoInputsState({ something: 'something' })));
    expect(state).toEqual(expect.not.objectContaining({ something: 'something' }));

    act(() => {
      setInputs({ nothing: 'nothing' });
    });
    expect(state).toEqual(expect.not.objectContaining({ nothing: 'nothing' }));
  });
});