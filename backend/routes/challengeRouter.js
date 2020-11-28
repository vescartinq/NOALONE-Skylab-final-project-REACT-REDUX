const { Router } = require('express');
const challengesController = require('../controllers/challengesController');
const challengeIdController = require('../controllers/challengeIdController');

function challengeRouter(challengeSchema) {
  const router = Router();
  const challenges = challengesController(challengeSchema);
  const challenge = challengeIdController(challengeSchema);

  router.route('/')
    .get(challenges.getChallengesMethod)
    .post(challenges.postChallengesMethod);

  router.route('/:challengeId')
    .get(challenge.getByIdMethod)
    .delete(challenge.deleteByIdMethod);
    .patch(challenge.patchByIdMethod);

  return router;
}

module.exports = challengeRouter;
