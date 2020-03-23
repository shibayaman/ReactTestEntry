import * as validator from '../requestValidator';

describe('hasValidTodo', () => {
  it('should return true only when "task & due & priority" is all set', () => {
    const correctReq = { task: 'a', due:'b', priority:'c' };
    const taskMissing = { due: 'b', priority: 'c'};

    expect(validator.hasValidTodo(correctReq)).toBeTruthy();
    expect(validator.hasValidTodo(taskMissing)).toBeFalsy();
  });
});

describe('hasValidId', () => {
  it('should return true only when id can be converted to integer', () => {
    const number = { id: 0 };
    const numberString = { id: '0' };
    const string = { id: 'a' };
    const noIdProp = { something: 'a'}

    expect(validator.hasValidId(number)).toBeTruthy();
    expect(validator.hasValidId(numberString)).toBeTruthy();
    expect(validator.hasValidId(string)).toBeFalsy();
    expect(validator.hasValidId(noIdProp)).toBeFalsy();
  });
});
