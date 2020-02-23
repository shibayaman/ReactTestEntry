const api = require('../apiFunc');

describe('api test', () => {
  it('should return json value', () => {
    const req = {}
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    }
   
    api.getTodo(req, res);

    expect(res.json.mock.calls[0][0]).toEqual({
      todo: [
        {
          id: 0,
          task: '洗濯機まわす',
          due: '今すぐ',
          priority: 'とても高い'
        }
      ]
    });

    expect(res.status.mock.calls[0][0]).toBe(200);
  });
});