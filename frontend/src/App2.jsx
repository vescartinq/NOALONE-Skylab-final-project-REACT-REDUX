import React from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import HomeScreen from './views/HomeScreen';
import DetailScreen from './views/DetailScreen';
import ListScreen from './views/ListScreen';

function App() {
  return (
    <BrowserRouter>
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
      <Switch>
        <Route path="/challenges" exact component={ListScreen} />
        <Route path="/challenges/:challengeId" exact component={DetailScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
