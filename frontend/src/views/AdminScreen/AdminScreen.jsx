/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import './AdminScreen.css';
import { listChallenges, deleteChallenge } from '../../redux/actions/challenge-actions';

function AdminScreen() {
  const challengeList = useSelector((state) => state.challengeList);
  const { loading, error, challenges } = challengeList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listChallenges());
  }, [dispatch]);

  return (
    <>
      <h3>VISTA ADMINISTRADOR</h3>
      <div className="adminScreen-container">
        {loading ? (
          <div className="loading">LOADING....</div>
        ) : error ? (
          <div className="error">ERROR, CHALLENGE NOT CREATED</div>
        ) : (
          <div className="admin-list">
            <ul>
              {challenges.map((challenge) => (
                <li key={challenge._id}>
                  <div className="admin-list_item">
                    <div className="item-title">
                      {' '}
                      {challenge.title}
                    </div>
                    <div className="item-btns">
                      <Button className="admin-btn" variant="secondary" type="button">Editar</Button>
                      <Button className="admin-btn" variant="danger" type="button" onClick={() => { dispatch(deleteChallenge(challenge)); }} href="/admin">Eliminar</Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>

    </>
  );
}

export default AdminScreen;
