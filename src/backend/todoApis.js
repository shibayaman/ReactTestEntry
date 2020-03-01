const validator = require('./requestValidator');
const todoModel = require('./todoModel');

const all = (req, res) => {
  res.status(200);
  res.json({
    todo: todoModel.getAllTodos()
  });
};

const create = (req, res) => {
  if(!validator.hasValidTodo(req.body)) {
    res.status(400);
    res.json({error: 'invalid paramter'});
    return;
  } 
  
  const { task, due, priority } = req.body;
  const newTodo = todoModel.createTodo(task, due, priority);
  res.status(201);
  res.json(newTodo);
}

const update = (req, res) => {
  if(!validator.hasValidId(req.params)) {
    res.status(404);
    res.json({error: 'invalid id'});
    return;
  }

  const id = parseInt(req.params.id);
  const { task, due, priority } = req.body;
  const updatedTodo = todoModel.updateTodo(id, task, due, priority);

  if(updatedTodo === null) {
    res.status(404);
    res.json({error: 'no matching id'});
    return;
  }

  res.status(201);
  res.json(updatedTodo);
}

const distory = (req, res) => {
  if(!validator.hasValidId(req.params)) {
    res.status(404);
    res.json({error: 'invalid id'});
    return;
  }

  const id = parseInt(req.params.id);
  const distroiedId = todoModel.deleteTodo(id);

  if(distroiedId === null) {
    res.status(404);
    res.json({error: 'no matching id'});
    return;
  }

  res.status(200);
  res.send();
}

module.exports = {
  all,
  create,
  update,
  distory,
}