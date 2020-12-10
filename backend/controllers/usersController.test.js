const usersController = require('./usersController');

describe('userController', () => {
  test('Should call a response on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const user = {
      find: jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      }),
    };
    usersController(user).getMethod({ user: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('Should call a response on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const user = {
      find: jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      }),
    };
    usersController(user).getMethod({ user: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('should call a response on putMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const user = {
      create: jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      }),
    };
    usersController(user).putMethod({}, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('should call a response on putMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const user = {
      create: jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      }),
    };
    usersController(user).putMethod({}, res);
    expect(res.send).toHaveBeenCalled();
  });
});
