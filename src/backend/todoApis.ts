import { Request, Response } from 'express';

import * as validator from './requestValidator';
import * as todoModel from './todoModel';

export const all = (req: Request, res: Response) => {
  res.status(200);
  res.json({
    todo: todoModel.getAllTodos()
  });
};

export const create = (req: Request, res: Response) => {
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

export const update = (req: Request, res: Response) => {
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

export const distory = (req: Request, res: Response) => {
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