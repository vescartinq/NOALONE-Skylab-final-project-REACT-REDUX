/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';

import { listChallenges } from '../redux/actions/challenge-actions';

import CardList from '../Components/CardList/CardList';
import './ListScreen.css';
import MainSlider from '../Components/MainSlider/MainSlider';

function ListScreen() {
  const dispatch = useDispatch();
  const challengeList = useSelector((state) => state.challengeList);
  const { loading, error, challenges } = challengeList;

  useEffect(() => {
    dispatch(listChallenges());
  }, [dispatch]);

  return (

    <div className="listScreen-mainContainer">
      <MainSlider />
      {loading ? (
        <div className="loading">LOADING</div>
      ) : error ? (
        <div className="error">ERROR</div>
      ) : (
        <>
          <div className="list-challenges_item">Challenges a punto de terminar</div>
          <Slider slidesToShow={3} autoplay autoplaySpeed={3000} speed={1000}>
            {challenges.map((challenge) => (
              <Link to={`/challenges/${challenge._id}`} key={challenge._id} className="text-link">
                <CardList challenge={challenge} />
              </Link>
            ))}
          </Slider>
        </>
      )}
    </div>

  );
}

export default ListScreen;
