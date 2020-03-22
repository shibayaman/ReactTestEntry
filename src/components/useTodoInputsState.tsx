import { useState } from 'react';

type InputsState = {
  task: string,
  due: string,
  priority: string
}

type setInputsState = ({ task, due, priority }: {
  task?: string;
  due?: string;
  priority?: string;
}) => void

type useTodoInputStateProps = {
  task?: string,
  due?: string,
  priority?: string
}

export const useTodoInputsState = ({
  task: initialTask = '',
  due: initialDue = '',
  priority: initialPriority = ''
}: useTodoInputStateProps = {}): [InputsState, setInputsState] => {
  const [state, setState] = useState({
    task: initialTask,
    due: initialDue,
    priority: initialPriority
  });

  const setInputsState = ({ task = state.task, due = state.due, priority = state.priority }) => {
    setState({
      task, due, priority
    });
  };

  return [state, setInputsState];
};