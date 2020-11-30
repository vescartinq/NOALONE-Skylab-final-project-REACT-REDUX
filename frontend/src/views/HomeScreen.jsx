/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listChallenges } from '../redux/actions/challenge-actions';

function HomeScreen() {
  const dispatch = useDispatch();
  const challengeList = useSelector((state) => state.challengeList);
  // eslint-disable-next-line no-debugger
  debugger;
  const { loading, error, challenges } = challengeList;

  useEffect(() => {
    dispatch(listChallenges());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <div>LOADING</div>
      ) : error ? (
        <div>ERROR</div>
      ) : (

        <div className="row center">
          {challenges.map((challenge) => (
            <div key={challenge._id} challenge={challenge}>
              {challenge.title}
              :
              {' '}
              {challenge.miniDescription}
            </div>
          ))}
        </div>
      )}
    </div>

  );
}

export default HomeScreen;
