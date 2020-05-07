import React, { useState, useEffect } from 'react';

const EvolutionCards = (props) => {
    const [pokemonEvolution, setPokemonEvolution] = useState({
        
    });

    useEffect(()=>{
        setPokemonEvolution({
            
        })
    }, [])

    return (
        <div className="col-sm-4">
            {props.name}
        </div>    
    )
}
export default EvolutionCards;