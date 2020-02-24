const express = require('express');
const app = express();
const path = require('path');

const todoApis = require('./todoApis');

const staticPath = path.resolve(__dirname, '../../public');
app.use('/static', express.static(staticPath));

app.use(express.json());

app.get('/api/todo', todoApis.getTodos);
app.post('/api/todo', todoApis.createTodo);
app.put('/api/todo/:id', todoApis.updateTodo);
app.delete('/api/todo/:id', todoApis.deleteTodo);

module.exports = app;