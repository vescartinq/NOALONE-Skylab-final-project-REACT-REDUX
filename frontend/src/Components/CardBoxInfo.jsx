import React, { Fragment } from 'react';
import data from '../data';

import './CardBoxInfo.css';

function CardBoxInfo() {
  return (
    <>
      <div className="card-box">
        <div className="card-info_box">
          <div className="card-info_item">
            <div className="card-info_item-title">COLLECTED:</div>

            <div id="collected" className="card-info_item-detail">
              {data.challenges[0].collected}
              {' '}
              €
            </div>
          </div>
          <div className="card-info_item">
            <div className="card-info_item-title">GOAL:</div>

            <div className="card-info_item-detail">
              {data.challenges[0].target}
              {' '}
              €
            </div>
          </div>
          <div className="card-info_item">
            <div className="card-info_item-title">DONATIONS:</div>

            <div className="card-info_item-detail">
              {data.challenges[0].participants}
              {' '}
              participants
            </div>
          </div>
          <div className="card-info_item">
            <div className="card-info_item-title">REMAINING:</div>

            <div className="card-info_item-detail">
              {data.challenges[0].days}
              {' '}
              days
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default CardBoxInfo;
