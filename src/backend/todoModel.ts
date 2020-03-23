// const data = require('./todoData');
import { data } from './todoData';
import { Todo } from '../shared/todoTypes';

export const getIndexById = (id: number): number | null => {
  const targetIndex = data.todo.findIndex(({ id: todoId }) => todoId === id);
  return targetIndex !== -1 ? targetIndex : null;
}

export const getAllTodos = (): Todo[] => {
  return data.todo;
}

export const getTodoById = (id: number): Todo | null => {
  const targetIndex = getIndexById(id);
  if(!targetIndex) {
    return null;
  }

  return data.todo[targetIndex];
}

export const createTodo = (
  task: string,
  due: string,
  priority: string
): Todo => {
  const newTodo = {
    id: data.index++,
    task,
    due,
    priority
  };

  data.todo.unshift(newTodo);

  return newTodo;
}

export const updateTodo = (
  id: number,
  task: string,
  due: string,
  priority: string
): Todo | null => {
  const targetIndex = getIndexById(id);
  if(targetIndex === null) {
    return null;
  }

  data.todo[targetIndex] = {
      id,
      task: task || data.todo[targetIndex].task,
      due: due || data.todo[targetIndex].due,
      priority: priority || data.todo[targetIndex].priority
  }

  return data.todo[targetIndex];
};

export const deleteTodo = (id: number): number | null => {
  const targetIndex = getIndexById(id);
  if(targetIndex === null) {
    return null;
  }

  data.todo.splice(targetIndex, 1);
  return id;
}