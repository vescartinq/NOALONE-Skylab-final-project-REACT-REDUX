import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import './CaseSlide.css';

import CasesItem from '../CasesItem/CasesItem';

export default function CaseSlide({ challenges }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    margin: 10,
    loop: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="wpo-case-area section-padding">
      <div className="container">
        <section className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <Link to="/challenges">
                <h2>RETOS CERCANOS A SU FINALIZACIÓN</h2>
              </Link>
            </div>
          </div>
        </section>
        <section className="wpo-case-wrap">
          <div className="wpo-case-slider">
            <Slider {...settings}>
              {challenges.map((challenge) => (
                <CasesItem key={challenge._id} challenge={challenge} />
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </div>
  );
}
