import React, { useEffect } from 'react';

/* Function component(stateless component), for passing the props.
 * Since they are stateless we will use hooks here. Hooks let us use state without using the class.
 * Always use ES6 annotation. Fat arrow function(nicer way!!!)
**/
const Pokemon = (props) => {
    useEffect(() => {
        console.log("useEffect::");
    });
    console.log("Hello");
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.url}</div>
        </div>
    )
}
export default Pokemon;