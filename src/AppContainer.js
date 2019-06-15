import React from 'react';
import Home from './components/Home';
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
      </Switch>
    </HashRouter>
  );
}

export default AppContainer;
