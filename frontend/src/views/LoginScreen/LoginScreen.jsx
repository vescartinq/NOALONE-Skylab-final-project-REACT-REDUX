import React from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/actions/challenge-actions';

function LoginScreen() {
  const dispatch = useDispatch();

  return (
    <div className="m-5 text-center">
      <h3>Registro de usuarios</h3>
      <hr />
      <button
        className="btn btn-dark"
        type="button"
        onClick={() => dispatch(userRegister())}
      >
        Acceder
      </button>
    </div>
  );
}

export default LoginScreen;
