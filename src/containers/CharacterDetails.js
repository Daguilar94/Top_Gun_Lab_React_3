import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BASE_REMOTE_ENDPOINT } from "../constants";
import { StyledHeader } from "../components/Home";

const StyledProfile = styled.div`
    text-align: center;
`;

const StyledCharacter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
    margin: 10px 0;
`;

const StyledCharacterInfo = styled.div`
    text-align: left;
    margin-left: 10px;
`;

const StyledProfilePic = styled.img`
    height: 300px;
    width: 300px;
`;

class CharacterDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterInfo: {
                gender: "",
                image: "",
                location: { name: "" },
                name: "",
                origin: { name: "" },
                species: "",
                status: ""
            },
            error: ''
        }
    }

    componentDidMount = () => {
        const { match: { params: { id } } } = this.props;
        axios.get(`${BASE_REMOTE_ENDPOINT}/character/${id}`)
        .then(response => {
            this.setState({
                characterInfo: response.data
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
        const {
            characterInfo: {
                gender,
                image,
                location: { name: locationName },
                name,
                origin: { name: originName },
                species,
                status
            }
        } = this.state;

        return ( 
            <StyledProfile>
                <StyledHeader><h1>{name}</h1></StyledHeader>
                <StyledCharacter>
                    <StyledProfilePic src={image} alt="Character"/>
                    <StyledCharacterInfo>
                        <p><b>Gender: </b>{gender}</p>
                        <p><b>Location: </b>{locationName}</p>
                        <p><b>Origin: </b>{originName}</p>
                        <p><b>Species: </b>{species}</p>
                        <p><b>Status: </b>{status}</p>
                    </StyledCharacterInfo>
                </StyledCharacter>
            </StyledProfile>
         );
    }
}
 
export default CharacterDetails;