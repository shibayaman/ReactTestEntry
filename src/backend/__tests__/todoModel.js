import * as api from '../todoModel';
import { data } from '../todoData';

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

describe('createTodo', () => {
  it('should create todo and increment index', () => {
    const task = 'テスト書く';
    const due = '今日中';
    const priority = '寝るより大事';

    const result = api.createTodo(task, due, priority);

    expect(result).toEqual({ id: 5, task, due, priority });
    expect(data.todo).toEqual([
      { id: 5, task, due, priority },
      { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' },
      { id: 2, task: '起きる', due: '5年後', priority: '地より低い' },
      { id: 4, task: '食べる', due: '5秒後', priority: '命より大事' }
    ]);

    expect(data.index).toBe(6);
  });
});

describe('updateTodo', () => {
  it('should update todo', () => {
    const id = 2;
    const task = undefined;
    const due = '10年後';
    const priority = undefined;

    const result = api.updateTodo(id, task, due, priority);

    expect(result).toEqual({ id: id, task: '起きる', due: '10年後', priority: '地より低い' });
    expect(data.todo).toEqual([
      { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' },
      { id: 2, task: '起きる', due: '10年後', priority: '地より低い' },
      { id: 4, task: '食べる', due: '5秒後', priority: '命より大事' }
    ]);
  });

  it('should return null if todo of given id was not found', () => {
    const id = 1;
    const task = undefined;
    const due = '10年後';
    const priority = undefined;

    const result = api.updateTodo(id, task, due, priority);

    expect(result).toBeNull();
    expect(data.todo).toEqual([
      { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' },
      { id: 2, task: '起きる', due: '5年後', priority: '地より低い' },
      { id: 4, task: '食べる', due: '5秒後', priority: '命より大事' }
    ]);
  });
});

describe('deleteTodo', () => {
  it('should remove todo', () => {
    const id = 2;
    
    const result = api.deleteTodo(id);

    expect(result).toBe(2);
    expect(data.todo).toEqual([
      { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' },
      { id: 4, task: '食べる', due: '5秒後', priority: '命より大事' }
    ]);
  });

  it('should return null if todo of given id was not found', () => {
    const id = 1;
    
    const result = api.deleteTodo(id);

    expect(result).toBeNull();
    expect(data.todo).toEqual([
      { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' },
      { id: 2, task: '起きる', due: '5年後', priority: '地より低い' },
      { id: 4, task: '食べる', due: '5秒後', priority: '命より大事' }
    ]);
  });
});