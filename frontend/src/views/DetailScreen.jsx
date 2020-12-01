/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { detailsChallenge } from '../redux/actions/challenge-actions';

import theme from '../themeConfig';

import MainContainer from '../Components/MainContainer';

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
          <div>LOADING</div>
        ) : error ? (
          <div>ERROR</div>
        ) : (
          <div>
            <MainContainer challenge={challenge} />
          </div>
        )}
      </div>
    </ThemeProvider>

  );
}

export default DetailScreen;
