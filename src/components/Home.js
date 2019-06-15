import React from 'react';
import CharacterList from '../containers/CharacterList';
import styled from 'styled-components';

const StyledAppContainer = styled.div`
    text-align: center;
`;

export const StyledHeader = styled.header`
    background-color: #222;
    color: #fff;
    overflow: auto;
`;

function Home() {
  return (
      <StyledAppContainer>
        <StyledHeader>
          <h1>Rick and Morty Multiverse</h1>
        </StyledHeader>
        <CharacterList />
      </StyledAppContainer>
  );
}

export default Home;
