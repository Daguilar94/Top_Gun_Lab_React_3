import React, { Component } from 'react';
import axios from 'axios';
import { BASE_LOCAL_ENDPOINT } from "../constants";

class CharacterDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterInfo: {},
            error: ''
        }
    }

    componentDidMount = () => {
        const { match: { params: { id } } } = this.props;
        axios.get(`${BASE_LOCAL_ENDPOINT}/characters/${id}`)
        .then(response => {
            this.setState({
                characterInfo: response.data,
                error: ''
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    render() { 
        const {
            characterInfo: {
                gender,
                image,
                location,
                name,
                origin,
                species,
                status
            }
        } = this.state;

        return ( 
            <div>
                <img src={image} alt=""/>
                <p><b>Name: </b>{name}</p>
                <p><b>gender: </b>{gender}</p>
                <p><b>location: </b>{location}</p>
                <p><b>origin: </b>{origin}</p>
                <p><b>species: </b>{species}</p>
                <p><b>status: </b>{status}</p>
            </div>
         );
    }
}
 
export default CharacterDetails;