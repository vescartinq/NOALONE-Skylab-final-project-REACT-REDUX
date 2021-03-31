import React from 'react';
import { Link } from 'react-router-dom';

function CasesItem({ challenge }) {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="wpo-case-single">
      <div className="wpo-case-item">
        <div className="wpo-case-img">
          <img src={challenge.image} alt="" />
        </div>
        <div className="wpo-case-content">
          <div className="wpo-case-text-top">
            <h2>{challenge.title}</h2>
            <div className="progress-section">
              <div className="process">
                <div className="progress">
                  <div className="progress-bar">
                    <div id="percent" className="progress-value ">
                      <span>30</span>
                      %
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <span>Recaudado:</span>
                {' '}
                {challenge.collected}
                {' '}
                €
              </li>
              <li>
                <span>Objetivo:</span>
                {' '}
                {challenge.target}
                {' '}
                €
              </li>
            </ul>
          </div>
          <div className="case-btn">
            <ul>
              <li className="case-btn_detail"><Link onClick={ClickHandler} to={`/challenges/${challenge._id}`}>Ver Detalles</Link></li>
              <li className="case-btn_donate"><Link onClick={ClickHandler} to="/donate">Donar</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasesItem;
