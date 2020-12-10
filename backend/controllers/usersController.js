/* eslint-disable no-shadow */
function usersController(userSchema) {
  function getUsersMethod(req, res) {
    const query = {};
    const getCallBack = (error, users) => (
      error ? res.send(error) : res.send(users)
    );
    userSchema.find(query, getCallBack);
  }

  function putMethod({ body }, res) {
    // eslint-disable-next-line no-debugger
    debugger;
    const { email } = body.user;

    userSchema.findOne({ email }, (errorPutUser, userFound) => {
      if (userFound) {
        return res.json(userFound);
      }

      const newUser = {
        userName: body.user.displayName, email: body.user.email, userPhotos: [body.user.photoURL],
      };
      userSchema.create(newUser, (createError, createdUser) => {
        if (createError) {
          return res.send('error creating user');
        }

        return res.json(createdUser);
      });
    });

    // function getByIdMethod(req, res) {
    //   const { userId } = req.params;
    //   userSchema.findById(userId, (errorFindUser, userData) => (errorFindUser
    //     ? res.send(errorFindUser)
    //     : res.send(userData)));
    // }
  }
  return { getUsersMethod, putMethod };
}

module.exports = usersController;
