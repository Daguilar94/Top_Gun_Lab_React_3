import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_REMOTE_ENDPOINT } from "../constants";
import Character from '../components/Character';

const StyledCharactersGrid = styled.div`
    margin-top: 10px;
    display: grid;
    justify-content: center;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fill, 200px);
`;

class CharacterList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            characters: {
                content: [],
                error: false
            }
         }
    }

    componentDidMount = () => {
        this.getCharacters();
    }

    getCharacters = () => {
        axios.get(`${BASE_REMOTE_ENDPOINT}/character`)
        .then(response => {
            this.setState({
                characters: {
                    content: response.data.results,
                    error: ''
                },
                createCharacterError: false
            })
        })
        .catch(error => {
            this.setState({
                characters: {
                    error: error.message
                }
            })
        })
    }

    render() { 
        const { characters: { content, error } } = this.state;

        if (error) {
            return <div>Fetch Error: {error}</div>
        }

        return (
            <StyledCharactersGrid>
                {content.map(({ id, image, name }) => (
                    <Link key={id} to={`/characters/${id}`}>
                        <Character imgSrc={image} name={name}/>
                    </Link>
                ))}
            </StyledCharactersGrid>
        );
    }
}
 
export default CharacterList;

