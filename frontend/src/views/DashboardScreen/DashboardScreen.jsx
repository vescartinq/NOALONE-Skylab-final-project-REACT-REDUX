/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';
import { Button } from '@material-ui/core';

import { listChallenges } from '../../redux/actions/challenge-actions';

import CardList from '../../Components/CardList/CardList';
import MainSlider from '../../Components/MainSlider/MainSlider';
import './DashboardScreen.css';

function DashboardScreen() {
  const dispatch = useDispatch();
  const challengeList = useSelector((state) => state.challengeList);
  const { loading, error, challenges } = challengeList;

  useEffect(() => {
    dispatch(listChallenges());
  }, [dispatch]);

  return (

    <div className="listScreen-mainContainer">
      <MainSlider />
      <div className="logged-container">
        <div className="logged-container_box">
          <p>
            ¿Quieres
            {' '}
            <b>ayudar</b>
            {' '}
            en los retos
            {' '}
            <b>cercanos</b>
            {' '}
            a ti?
          </p>
          <Button size="large" type="button" variant="contained" color="primary" href="#comunidad" className="logged-btn">AYUDA A TU COMUNIDAD</Button>
        </div>
        <div div className="logged-container_box">
          <p>
            ¿Quieres dar tu
            {' '}
            <b>apoyo</b>
            {' '}
            pero no te
            {' '}
            <b>decides</b>
            {' '}
            por ningún reto?
          </p>
          <Button size="large" type="button" variant="contained" color="primary" href="/donate" className="logged-btn">HAZ UNA DONACIÓN</Button>
        </div>
      </div>
      {loading ? (
        <div className="loading">LOADING</div>
      ) : error ? (
        <div className="error">ERROR</div>
      ) : (
        <>
          <div className="list-challenges_item">
            <Link to="/challenges">LISTADO DE TODOS LOS RETOS EN ACTIVO</Link>
          </div>
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

export default DashboardScreen;
