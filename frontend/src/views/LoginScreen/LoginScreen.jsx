import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userRegister } from '../../redux/actions/challenge-actions';

function LoginScreen(props) {
  const dispatch = useDispatch();

  const loading = useSelector((store) => store.user.loading);
  const active = useSelector((store) => store.user.active);
  // eslint-disable-next-line no-console
  console.log(active);

  useEffect(() => {
    if (active) {
      props.history.push('/');
    }
  }, [active]);

  return (
    <div className="m-5 text-center">
      <h3>Registro de usuarios</h3>
      <hr />
      <button
        className="btn btn-dark"
        type="button"
        onClick={() => dispatch(userRegister())}
        disabled={loading}
      >
        Acceder
      </button>
    </div>
  );
}

export default withRouter(LoginScreen);
