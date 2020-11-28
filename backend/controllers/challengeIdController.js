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

  function patchByIdMethod(req, res) {
    const { challengeId } = req.params;
    const query = { _id: challengeId };

    const patchCallback = (error) => {
      error ? res.send(error) : res.send('Updated Challenge');
    };
    itemSchema.updateOne(query, { 'product-name': 'Caca' }, patchCallback);
  }

  function getByIdMethod(req, res) {
    const { itemId } = req.params;
    itemSchema.findOne({ id: itemId }, (errorFindItems, items) => {
      if (errorFindItems) {
        res.send(errorFindItems);
      } else {
        res.json(items);
      }
    });
  }

  return { getByIdMethod, deleteByIdMethod, patchByIdMethod };
}

module.exports = challengeIdController;
