import React, { useEffect, useState } from 'react';
import axios from 'axios';

/* Function component(stateless component), for passing the props.
 * Since they are stateless we will use hooks here. Hooks let us use state without using the class.
 * Always use ES6 annotation. Fat arrow function(nicer way!!!)
**/
const Pokemon = (props) => {
    //React hook for state
    const [pokemonCard, setPokemonCard] = useState({});
    //React hooks for componentDidMount
    useEffect(() => {
        axios.get(props.url)
        .then(function(response) {
            console.log(response);

        })
        .catch(function(error) {
            console.log(error);
        })
    });
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.url}</div>
        </div>
    )
}
export default Pokemon;