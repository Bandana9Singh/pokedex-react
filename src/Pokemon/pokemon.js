import React from 'react';

//Function based component, for passing the props
const pokemon = (props) => {
    return (
        <div>{props.url}</div>
    );    
}
export default pokemon;