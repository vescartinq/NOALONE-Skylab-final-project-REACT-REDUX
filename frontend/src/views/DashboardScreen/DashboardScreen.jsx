import React from 'react';
import { Link } from 'react-router-dom';

function DashboardScreen() {
  return (

    <div>
      DASHBOARD SCREEN
      <div>
        <div>
          <ul className="dropdown-content">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/challenges">Challenges List</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default DashboardScreen;
