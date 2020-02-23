const express = require('express');
const app = express();
const path = require('path');

const todoApis = require('./backend/todoApis');

const PORT = process.env.PORT || 3000;

const staticPath = path.resolve(__dirname, '../public');
app.use('/static', express.static(staticPath));
app.use(express.json());

app.get('/api/todo', todoApis.getTodos);
app.post('/api/todo', todoApis.createTodo);
app.put('/api/todo/:id', todoApis.updateTodo);
app.delete('/api/todo/:id', todoApis.deleteTodo);

app.listen(PORT, () => {
  console.log('listening on ' + PORT);
});