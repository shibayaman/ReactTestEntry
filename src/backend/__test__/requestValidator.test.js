const { hasValidTodo, hasValidId } = require('../requestValidator');

describe('hasValidTodo', () => {
  it('should return true only when "task & due & priority" is all set', () => {
    const correctReq = { task: 'a', due:'b', priority:'c' };
    const taskMissing = { due: 'b', priority: 'c'};

    expect(hasValidTodo(correctReq)).toBeTruthy();
    expect(hasValidTodo(taskMissing)).toBeFalsy();
  });
});

describe('hasValidId', () => {
  it('should return true only when id can be converted to integer', () => {
    const number = { id: 0 };
    const numberString = { id: '0' };
    const string = { id: 'a' };
    const noIdProp = { something: 'a'}

    expect(hasValidId(number)).toBeTruthy();
    expect(hasValidId(numberString)).toBeTruthy();
    expect(hasValidId(string)).toBeFalsy();
    expect(hasValidId(noIdProp)).toBeFalsy();
  });
});
