/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { detailsChallenge } from '../redux/actions/challenge-actions';

import theme from '../themeConfig';

import MainContainer from '../Components/MainContainer';
import Footer from '../Components/Footer/Footer';

function DetailScreen() {
  const dispatch = useDispatch();
  const { challengeId } = match.params.id;
  const challengeDetails = useSelector((state) => state.challengeDetails);
  const { loading, error, challenge } = challengeDetails;

  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
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
            <Footer />
          </div>
        )}
      </div>
    </ThemeProvider>

  );
}

export default DetailScreen;
