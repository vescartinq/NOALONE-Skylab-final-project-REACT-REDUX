/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { detailsChallenge } from '../../redux/actions/challenge-actions';

import theme from '../../themeConfig';

import ChallengeCard from '../../Components/ChallengeCard/ChallengeCard';

function DetailScreen() {
  const dispatch = useDispatch();
  const { challengeId } = useParams();
  const challengeDetails = useSelector((state) => state.challengeDetails);
  const { loading, error, challenge } = challengeDetails;

  useEffect(() => {
    dispatch(detailsChallenge(challengeId));
  }, [dispatch, challengeId]);

  return (

    <ThemeProvider theme={theme}>
      <div>
        {loading ? (
          <div className="loading">LOADING</div>
        ) : error ? (
          <div className="error">ERROR</div>
        ) : (
          <div className="ChallengeCard-item">
            <ChallengeCard className="challenge-item" challenge={challenge} />
          </div>
        )}
      </div>
    </ThemeProvider>

  );
}

export default DetailScreen;
