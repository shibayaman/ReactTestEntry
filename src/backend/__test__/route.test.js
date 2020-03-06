const app = require('../route');
const request = require('supertest');

const data = require('../todoData');

beforeEach(() => {
  data.index = 1;
  data.todo = [
    { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' }
  ];
});

describe('GET /api/todo', () => {
  it('should respond', async () => {
    const res = await request(app).get('/api/todo');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      todo: [
        { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' }
      ]
    });
  });
});

describe('POST /api/todo', () => {
  it('should create new todo and respond with new todo', async () => {
    const todo = { task: '起きる', due: '5年後', priority: 'とても低い' };
    const expectedResponse = { id: 1, task: '起きる', due: '5年後', priority: 'とても低い' }
    const res =
      await request(app)
      .post('/api/todo')
      .send(todo);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(expectedResponse);
  });

  it('should return error message when passed invalid props', async () => {
    const taskMissing = { due: '5年後', priority: 'とても低い' };
    const expectedResponse = { error: 'invalid paramter' };
    const res =
      await request(app)
      .post('/api/todo')
      .send(taskMissing);
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual(expectedResponse);
  });
});

describe('PUT /api/todo/:id', () => {
  it('should update todo and respond with updated todo', async () => {
    const todo = { task: 'ご飯食べる', priority: '命より大事' };
    const expectedResponse = { id: 0, task: 'ご飯食べる', due: '今すぐ', priority: '命より大事' };
    const res = 
      await request(app)
      .put('/api/todo/0')
      .send(todo);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(expectedResponse);
  });

  it('should respond with error message when passed invalid id', async () => {
    const todo = { task: 'ご飯食べる', priority: '命より大事' };
    const expectedResponse = { error: 'invalid id' };
    const res = 
      await request(app)
      .put('/api/todo/abc')
      .send(todo);
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual(expectedResponse);
  });

  it('should return error message when passed id that does not exist', async () => {
    const todo = { task: 'ご飯食べる', priority: '命より大事' };
    const expectedResponse = { error: 'no matching id' };
    const res = 
      await request(app)
      .put('/api/todo/1')
      .send(todo);
    expect(res.status).toBe(404);
    expect(res.body).toEqual(expectedResponse);
  });
});

describe('DELETE /api/todo/:id', () => {
  it('should delete todo and respond with 200', async () => {
    const res =
      await request(app)
      .delete('/api/todo/0');
    expect(res.statusCode).toBe(200);
  });

  it('should respond with error message when passed invalid id', async () => {
    const expectedResponse = { error: 'invalid id' };
    const res = 
      await request(app)
      .delete('/api/todo/abc');
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual(expectedResponse);
  });

  it('should return error message when passed id that does not exist', async () => {
    const expectedResponse = { error: 'no matching id' };
    const res = 
      await request(app)
      .delete('/api/todo/1');
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual(expectedResponse);
  });
});
