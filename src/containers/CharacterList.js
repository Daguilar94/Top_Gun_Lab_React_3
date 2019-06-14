import React, { Component } from 'react';

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

    getCharacters = () => {}

    createCharacter = (e) => {}

    createTextInput = (value, field) => (
        <input
            required
            type="text"
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

        return (
            <>  
                <h2>Create Character</h2>

                <form onSubmit={e => this.createCharacter(e)}>
                    {this.createTextInput(name, 'name')}
                    {this.createTextInput(location, 'location')}
                    {this.createTextInput(status, 'status')}
                    {this.createTextInput(species, 'species')}
                    {this.createTextInput(gender, 'gender')}
                    {this.createTextInput(origin, 'origin')}
                    {this.createTextInput(image, 'image')}
                    <button type="submit">Create</button>
                </form>
            </>
        );
    }
}
 
export default CharacterList;

//----------------------------------------------------------------------------------------
//1. Importar Axios

//2. Importar el endpoint de constants.js

//3. En la function "getCharacters" realiza un llamado GET al endpoint "http://localhost:3004/characters",
// (Utiliza la constante que importaste en el paso 2).
// este endpoint devuelve un arreglo de personajes de la serie Rick and Morty, debes guardar
// este arreglo en el estado, específicamente en la llave content del objeto characters.

//4. Una vez se monte el componente, llama la función "getCharacters" para obtener la información.

//5. Después del formulario, Itera sobre el arreglo de personajes que ya está guardado en el estado y por cada uno
// renderiza su imagen y nombre utilizando el componente "Character" ubicado en "/components/Character.js"

//6. Si en la petición realizada en el punto 3 ocurre un error, el componente sólo debe mostrar el
// mensaje de error devuelto en la petición.

//7. Cuando Se llene el formulario de creación y se le haga submit (En la función "createCharacter"), Realizar una petición POST al
// endpoint "http://localhost:3004/characters" con la información ingresada.
// el endpoint recibe los siguientes campos:

// name
// location
// status
// species
// gender
// origin
// image

// 8. Si la creación del personaje se realiza con éxito, vuelve a llamar la función "getCharacters"
// para que se vuelvan a cargar los personajes ya actualizados.

//9. En caso de que ocurra un error en la creación del usuario, mostrar un mensaje de error
// encima del formulario.