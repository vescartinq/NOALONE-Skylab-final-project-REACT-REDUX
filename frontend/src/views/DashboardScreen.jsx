import React from 'react';
import {
  BrowserRouter, Link, Switch, Route,
} from 'react-router-dom';
import ListScreen from './ListScreen';

function DashboardScreen() {
  return (
    <BrowserRouter>
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
      <Switch>
        <Route path="/challenges" component={ListScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default DashboardScreen;
