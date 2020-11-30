import React, { Fragment } from 'react';
import data from '../data';

function CardBoxInfo() {
  return (
    <>
      <div className="card-box">
        <hr />
        <div className="card-info_box">
          <div>
            COLLECTED:
            {' '}
            {data.challenges[0].collected}
            {' '}
            €
          </div>
          <div>
            GOAL:
            {' '}
            {data.challenges[0].target}
            {' '}
            €
          </div>
          <div>
            DONATIONS:
            {' '}
            {data.challenges[0].participants}
            {' '}
            participants
          </div>
          <div>
            DAYS REMAINING:
            {' '}
            {data.challenges[0].days}
            {' '}
            days
          </div>

        </div>
        <hr />
      </div>
    </>
  );
}

export default CardBoxInfo;
