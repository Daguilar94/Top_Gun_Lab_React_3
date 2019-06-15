import React from 'react';
import Home from './components/Home';
import NotFound from './components/NotFound'
import CharacterDetails from './containers/CharacterDetails';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

function AppContainer() {
  return (
    <HashRouter>
      <Switch>
        <Route
            exact
            path="/"
            render={() => (
                <Redirect to="/characters" />
            )}
        />
        <Route exact path="/characters" component={Home} />
        <Route exact path="/characters/:id" component={CharacterDetails} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default AppContainer;
