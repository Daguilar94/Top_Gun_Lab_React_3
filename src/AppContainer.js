import React from 'react';
import CharacterList from './containers/CharacterList';

function AppContainer() {
  return (
    <div className="AppContainer">
      <header>
        <h1>Rick and Morty Multiverse</h1>
      </header>
      <CharacterList />
    </div>
  );
}

export default AppContainer;
