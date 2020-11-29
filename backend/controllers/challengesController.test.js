const challengeSchema = require('../models/challengeSchema');
const challengesController = require('./challengesController')(challengeSchema);

jest.mock('../models/challengeSchema');

describe('challengesController', () => {
  let res;
  beforeEach(() => {
    res = { send: jest.fn() };
  });

  describe('getChallengesMethod', () => {
    test('should call res.send ', () => {
      challengeSchema.find = jest.fn().mockReturnValueOnce({
        exec: jest.fn().mockImplementationOnce((callback) => callback()),
      });

      challengesController.getChallengesMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send with error', () => {
      challengeSchema.find = jest.fn().mockReturnValueOnce({
        exec: jest.fn().mockImplementationOnce((callback) => callback(true)),
      });

      challengesController.getChallengesMethod(null, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('postChallengesMethod', () => {
    let req;
    beforeEach(() => {
      req = { body: { name: 'a,b,c' } };
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should call res.send', () => {
      challengeSchema.create = jest.fn().mockImplementationOnce((query, callback) => (
        callback()
      ));

      challengesController.postChallengesMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });

    test('shoould call send with error', () => {
      challengeSchema.create = jest.fn().mockImplementationOnce((query, callback) => (
        callback(true)
      ));

      challengesController.postChallengesMethod(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
