const express = require('express');
const app = express();
const path = require('path');

const todoApis = require('./todoApis');

const staticPath = path.resolve(__dirname, '../../public');
app.use('/static', express.static(staticPath));

app.use(express.json());

app.get('/api/todo', todoApis.all);
app.post('/api/todo', todoApis.create);
app.put('/api/todo/:id', todoApis.update);
app.delete('/api/todo/:id', todoApis.distory);

export { app };