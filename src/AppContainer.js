import React from 'react';

function AppContainer() {
  return (<></>);
}

export default AppContainer;

//-----------------------------------------------------------------------------------------------
//1. Importar el componente Home de "components/Home.js"

//2. Importar los siguientes componentes de "react-router-dom":
// HashRouter
// Route
// Switch
// Redirect

//3. crear un el routing principal para la aplicación (con BrowserRouter o HashRouter).
// La aplicación va a tener 4 rutas principales:
// a. "/" Debe redireccionar a "/characters"
// b. "/characters" Debe renderizar el componente "Home".
// c. "/characters/id" Debe renderizar el personaje correspondiente al id pasado.
// d. "*" Página para rutas no especificadas (Not found).

//4. Crear un componente (Container) llamado CharacterDetails.js, el cual va a ser renderizado
// en la ruta "/characters/id". Este componente debe recibir el id que viene por params
// y hacer una petición al servidor obteniendo, la información del personaje específico
// y renderizando la siguiente información del personaje:

// image
// Name
// gender
// location
// origin
// species
// status

//5. En el componente "CharacterList" actualiza el método map dentro de render de forma que cada 
// "Character" quede envielto en un link que al darle click lleve a la ruta "/characters/id"
// con su respectivo id.

//6. Crear un componente "NotFound" que se va a renderizar en la ruta de Not found.
