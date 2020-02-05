import React from 'react';

//Function based component, for passing the props
const pokemon = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.url}</div>
        </div>  
    );    
}
export default pokemon;