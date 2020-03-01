const api = require('../todoModel');
const data = require('../todoData');

beforeEach(() => {
  data.index = 5;
  data.todo = [
    { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' },
    { id: 2, task: '起きる', due: '5年後', priority: '地より低い' },
    { id: 4, task: '食べる', due: '5秒後', priority: '命より大事' }
  ];
});

describe('getIndexById', () => {
  it('should search todo by id', () => {
    const id = 4;
    const expectedIndex = 2;

    expect(api.getIndexById(id)).toBe(expectedIndex);
  });
  it('should return null when todo is not found', () => {
    const id = 10;

    expect(api.getTodoById(id)).toBeNull();
  })
});

describe('getAllTodos', () => {
  it('should return all todos in the array', () => {
    expect(api.getAllTodos()).toEqual([
      { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' },
      { id: 2, task: '起きる', due: '5年後', priority: '地より低い' },
      { id: 4, task: '食べる', due: '5秒後', priority: '命より大事' }
    ]);
  });
});

describe('getTodoById', () => {
  it('should return todo with given id', () => {
    const id = 2;
    const expectedTodo = { id: 2, task: '起きる', due: '5年後', priority: '地より低い' };

    expect(api.getTodoById(id)).toEqual(expectedTodo);
  });

  it('should return null when todo is not found', () => {
    const id = 1;

    expect(api.getTodoById(id)).toBeNull();
  });
});