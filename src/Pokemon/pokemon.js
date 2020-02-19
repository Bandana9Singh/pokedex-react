import React, { useEffect, useState } from 'react';
import axios from 'axios';

/* Function component(stateless component), for passing the props.
 * Since they are stateless we will use hooks here. Hooks let us use state without using the class.
 * Always use ES6 annotation. Fat arrow function(nicer way!!!)
**/
const Pokemon = (props) => {
    //React hook for state
    const [pokemonCard, setPokemonCard] = useState({
        dataArray: {}
    });
    /** useEffect hook is called each time the virutal DOM is loaded. It covers all the component lifecycle events. Hence the code from previous commit was adding infite ajax calls.
      * Equivalent of componentDidUpdate and componentDidMount in one effect. 
      * To limit the useEffect call to only when this function is called, use the second variable (props.url). It essentially tells, call useEffect when certain prop changes.
      * If want to load this first time, leave the second parameter as empty array i.e to get the componentDidMount effect
      */  
    useEffect(() => {
        axios.get(props.url)
        .then(function(response) {
            setPokemonCard({
                dataArray: response.data
            })
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
    }, [props.url]);
    return (
        <div>{pokemonCard.dataArray.name}</div>
    )
}
export default Pokemon;