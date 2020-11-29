function challengeController(challengeSchema) {
  function getChallengesMethod(req, res) {
    const query = {};
    const getCallBack = (getError, challenges) => (
      getError ? res.send(getError) : res.send(challenges)
    );
    challengeSchema.find(query).exec(getCallBack);
  }

  function postChallengesMethod(req, res) {
    const challenge = req.body;
    const createCallBack = (error, newChallenge) => {
      error ? res.send(error) : res.send(newChallenge);
    };
    challengeSchema.create(challenge, createCallBack);
  }

  return { getChallengesMethod, postChallengesMethod };
}

module.exports = challengeController;
