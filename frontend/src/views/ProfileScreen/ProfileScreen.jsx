/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChartBar from '../../Components/ChartBar/ChartBar';
import TableItem from '../../Components/MaterialTable/TableItem';
import { listChallenges } from '../../redux/actions/challenge-actions';

import './ProfileScreen.css';

function ProfileScreen() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);

  const challengeList = useSelector((state) => state.challengeList);
  const { loading, error, challenges } = challengeList;

  useEffect(() => {
    dispatch(listChallenges());
  }, [dispatch]);
  return (
    <>
      <div className="profile-container">
        <div className="info-box">
          <section>
            <img src={user.image} alt="user-img" className="user-img" />
          </section>
          <div className="userName">{user.displayName.toUpperCase()}</div>
        </div>
      </div>

      <div className="admin-container">
        {loading ? (
          <div className="loading">LOADING....</div>
        ) : error ? (
          <div className="error">ERROR, CHALLENGE NOT CREATED</div>
        ) : (
          <div>
            <div className="admin-list">
              <TableItem challenges={challenges} />
            </div>
            <div>
              <ChartBar challenges={challenges} />
            </div>

          </div>
        )}
      </div>
    </>
  );
}

export default ProfileScreen;
