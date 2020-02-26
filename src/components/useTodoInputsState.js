import { useState } from 'react';

export default ({ task: initialTask = '', due: initialDue = '', priority: initialPriority = '' } = {}) => {
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