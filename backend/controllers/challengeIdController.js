function challengeIdController(challengeSchema) {
  function getByIdMethod(req, res) {
    const { challengeId } = req.params;

    challengeSchema.findOne({ _id: challengeId }, (errorFindChallenges, challenges) => {
      errorFindChallenges ? res.send(errorFindChallenges) : res.json(challenges);
    });
  }

  function deleteByIdMethod(req, res) {
    const { challengeId } = req.params;
    const query = { _id: challengeId };

    const deleteCallback = (error) => {
      error ? res.send(error) : res.send('Challenge Deleted');
    };
    challengeSchema.deleteOne(query, deleteCallback);
  }

  function patchByIdMethod(req, res) { // TODO: ' Something';
    //     const { challengeId } = req.params;
    //     const query = { _id: challengeId };

    //     const patchCallback = (error) => {
    //       error ? res.send(error) : res.send('Updated Challenge');
    //     };
    //     challengeSchema.updateOne(query, { _id: challengeId }, patchCallback);
    //   }

    // function getByIdMethod(req, res) {
    //     const { challengeId } = req.params;

    //     challengeSchema.findOne({ _id: challengeId }, (errorFindChallenges, challenges) => {
    //       errorFindChallenges ? res.send(errorFindChallenges) : res.json(challenges);
    //     });
    //   }
  }

  return { getByIdMethod, deleteByIdMethod, patchByIdMethod };
}

module.exports = challengeIdController;
