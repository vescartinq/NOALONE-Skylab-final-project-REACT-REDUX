import React from 'react';
import {
  BrowserRouter,
  Switch, Route,
} from 'react-router-dom';
import DetailScreen from './views/DetailScreen';
import ListScreen from './views/ListScreen';
import DashboardScreen from './views/DashboardScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/challenges/:challengeId" exact component={DetailScreen} />
          <Route path="/challenges" component={ListScreen} />
          <Route path="/" component={DashboardScreen} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
