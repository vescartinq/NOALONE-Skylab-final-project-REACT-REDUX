/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slider from 'infinite-react-carousel';

import { listChallenges } from '../redux/actions/challenge-actions';

import CardList from '../Components/CardList/CardList';
import './ListScreen.css';

function ListScreen() {
  const dispatch = useDispatch();
  const challengeList = useSelector((state) => state.challengeList);
  const { loading, error, challenges } = challengeList;

  useEffect(() => {
    dispatch(listChallenges());
  }, [dispatch]);

  return (
    <>
      <div>
        {loading ? (
          <div>LOADING</div>
        ) : error ? (
          <div>ERROR</div>
        ) : (

          <Slider dots rows={1} slidesToShow={3} autoplay adaptiveHeight overScan={3}>

            {challenges.map((challenge) => (
              // SLIDER

              <CardList key={challenge._id} challenge={challenge} />

            ))}
          </Slider>
        )}
      </div>
    </>
  );
}

export default ListScreen;
