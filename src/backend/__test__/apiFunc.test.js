const api = require('../apiFunc');

describe('api test', () => {
  it('should return json value', () => {
    const req = {}
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    }
   
    api.jsonApi(req, res);

    expect(res.json.mock.calls[0][0]).toEqual([
      {
        todo: {
          task: 'go to bed',
          due: 'now',
          priority: 'very high'
        }
      }
    ]);

    expect(res.status.mock.calls[0][0]).toBe(200);
  });
});
