function challengeIdController(challengeSchema) {
  function getByIdMethod(req, res) {
    const query = { _id: req.params.challengeId };
    const getCallBack = (getError, challenges) => (
      getError ? res.send(getError) : res.send(challenges)
    );
    challengeSchema.findOne(query)
      .exec(getCallBack);
  }

  function deleteByIdMethod(req, res) {
    const { challengeId } = req.params;
    const query = { _id: challengeId };

    const deleteCallback = (error) => {
      error ? res.send(error) : res.send('Challenge Deleted');
    };
    challengeSchema.deleteOne(query, deleteCallback);
  }

  // TODO: PatchMethod;

  return { getByIdMethod, deleteByIdMethod };
}

module.exports = challengeIdController;
