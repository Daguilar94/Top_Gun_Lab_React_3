import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_LOCAL_ENDPOINT } from "../constants";
import Character from '../components/Character';

const StyledCharacterForm = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, auto);
    
    input[name="image"] {
        grid-column: 1/3;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, auto);
        input[name="image"] {
            grid-column: 1/2;
        }
    }

    @media (max-width: 475px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
        input[name="image"] {
            grid-column: 1/2;
        }
    }

    button {
        cursor: pointer;
        background: transparent;
        border: 1px solid #fff;
        font-size: 16px;
        color: #fff;
        border-radius: 5px;
        transition: background 0.37s ease-in-out;
        margin: 5px;

        :hover {
            background: #ffffff33;
            transition: background 0.37s ease-in-out;
        }
    }
`;

const StyledCharactersGrid = styled.div`
    margin-top: 10px;
    display: grid;
    justify-content: center;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fill, 200px);
`;

const StyledCharacterInput = styled.input`
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #222;
    font-size: 16px;
    padding: 5px 5px 5px 10px;
`;

const StyledFormContainer = styled.div`
    color: #fff;
    padding: 10px;
    background-color: #555;
`;

class CharacterList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            characters: {
                content: [],
                error: false
            },
            newCharacterFrom: {
                name: "",
                location: "",
                status: "",
                species: "",
                gender: "",
                origin: "",
                image: ""
            },
            createCharacterError: false
         }
    }

    componentDidMount = () => {
        this.getCharacters();
    }

    getCharacters = () => {
        axios.get(`${BASE_LOCAL_ENDPOINT}/characters`)
        .then(response => {
            this.setState({
                characters: {
                    content: response.data,
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

    createCharacter = (e) => {
        e.preventDefault();
        const {
            newCharacterFrom: {
                name,
                location,
                status,
                species,
                gender,
                origin,
                image
            }
        } = this.state;
        
        axios.post(`${BASE_LOCAL_ENDPOINT}/characters`, {
            name,
            location,
            status,
            species,
            gender,
            origin,
            image
        }, {
            headers: { "Content-Type": "application/json"}
        })
        .then(() => { this.getCharacters() })
        .catch(() => { this.setState({ createCharacterError: true })})
    }

    createTextInput = (value, field) => (
        <StyledCharacterInput
            required
            type="text"
            name={field}
            placeholder={field}
            onChange={(e) => this.handleInputChange(e.target.value, field)}
            value={value}
        />
    )

    handleInputChange = (value, field) => {
        this.setState(prevState => ({
            newCharacterFrom: {
                ...prevState.newCharacterFrom,
                [field]: value
            }
        }))
    }

    render() { 
        const {
            createCharacterError,
            characters: { content, error },
            newCharacterFrom: {
                name,
                location,
                status,
                species,
                gender,
                origin,
                image
            }
        } = this.state;

        if (error) {
            return <div>Fetch Error: {error}</div>
        }

        return (
            <>  
                <StyledFormContainer>
                    <h2>Create Character</h2>

                    {createCharacterError && <p>An error ocurred creating Character</p>}
                    <StyledCharacterForm onSubmit={e => this.createCharacter(e)}>
                        {this.createTextInput(name, 'name')}
                        {this.createTextInput(location, 'location')}
                        {this.createTextInput(status, 'status')}
                        {this.createTextInput(species, 'species')}
                        {this.createTextInput(gender, 'gender')}
                        {this.createTextInput(origin, 'origin')}
                        {this.createTextInput(image, 'image')}
                        <button type="submit">Create</button>
                    </StyledCharacterForm>
                </StyledFormContainer>
                <StyledCharactersGrid>
                    {content.map(({ id, image, name }) => (
                        <Link key={id} to={`/characters/${id}`}>
                            <Character imgSrc={image} name={name}/>
                        </Link>
                    ))}
                </StyledCharactersGrid>
            </>
        );
    }
}
 
export default CharacterList;

