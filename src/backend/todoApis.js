const validator = require('./requestValidator');
const data = require('./todoData');

const getTodos = (req, res) => {
  res.status(200);
  res.json({
    todo: data.todo
  });
};

const createTodo = (req, res) => {
  if(!validator.hasValidTodo(req.body)) {
    res.status(400);
    res.json({error: 'invalid paramter'});
  } 
  
  const { task, due, priority } = req.body;
  const newTodo = {
    id: data.index++,
    task,
    due,
    priority
  };
  data.todo.unshift(newTodo);
  res.status(201);
  res.json(newTodo);
}

const updateTodo = (req, res) => {
  if(!validator.hasValidId(req.params)) {
    res.status(400);
    res.json({error: 'invalid paramter'});
    return;
  }

  const { id } = req.params;
  const { task, due, priority } = req.body;
  data.todo[id] = {
    id,
    task: task || data.todo[id].task,
    due: due || data.todo[id].due,
    priority: priority || data.todo[id].due
  }
  res.status(201);
  res.json(data.todo[id]);
}

const deleteTodo = (req, res) => {
  if(!validator.hasValidId(req.params)) {
    res.status(400);
    res.json({error: 'invalid paramter'});
    return;
  }

  const { id } = req.params;
  data.todo = data.todo.filter((todo) => todo.id !== id);
  res.status(200);
  res.send();
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
}