const challengeIdController = require('./challengeIdController');

describe('challengeIdController', () => {
  describe('getByIdMethod', () => {
    test('should call json', () => {
      const challenge = {
        findOne: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => callback()),
        }),
      };
      const req = { params: { challengeID: '2' } };
      const res = {
        send: jest.fn(),
      };

      challengeIdController(challenge).getByIdMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('should call json with error', () => {
      const challenge = {
        findOne: jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockImplementationOnce((callback) => callback(true)),
        }),
      };
      const req = { params: { challengeID: '2' } };
      const res = {
        send: jest.fn(),
        json: jest.fn(),
      };

      challengeIdController(challenge).getByIdMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
