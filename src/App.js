import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/main';

const App = () => (
  <Switch>
    <Route exact path="/" component={Container} />
  </Switch>
);

export default App;
