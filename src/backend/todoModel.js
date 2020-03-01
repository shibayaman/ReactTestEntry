const data = require('./todoData');

const getIndexById = id => {
  const targetIndex = data.todo.findIndex(({ id: todoId }) => todoId === id);
  return targetIndex !== -1 ? targetIndex : null;
}

const getAllTodos = () => {
  return data.todo;
}

const getTodoById = id => {
  const targetIndex = getIndexById(id);
  if(!targetIndex) {
    return null;
  }

  return data.todo[targetIndex];
}

const createTodo = (task, due, priority) => {
  const newTodo = {
    id: data.index++,
    task,
    due,
    priority
  };

  data.todo.unshift(newTodo);

  return newTodo;
}

const updateTodo = (id, task, due, priority) => {
  const targetIndex = getIndexById(id);
  if(targetIndex === null) {
    return null;
  }

  data.todo[targetIndex] = {
      id,
      task: task || data.todo[id].task,
      due: due || data.todo[id].due,
      priority: priority || data.todo[id].due
  }

  return data.todo[targetIndex];
};

const deleteTodo = id => {
  const targetIndex = getIndexById(id);
  if(targetIndex === null) {
    return null;
  }

  data.todo.splice(targetIndex, 1);
  return id;
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
}