import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EvolutionCards = (props) => {
    const [evolutionURL, setEvolutionURL] = useState({
        evolution_chain: {}
    });
    const [pokemonEvolution, setPokemonEvolution] = useState({
        evolution_array: []
    });

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/` + props.pokemonId)
        .then(function(response) {
            setEvolutionURL({
                evolution_chain: response.data.evolution_chain
            })
        })
        .catch(function(error) {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        if (evolutionURL.evolution_chain.url) {
            axios.get(evolutionURL.evolution_chain.url)
            .then(function(response){
                getEvolutionArray(response.data.chain);
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }, [evolutionURL.evolution_chain.url]);

    function getEvolutionArray(evolutionObject) {
        //While loop for iterating the chain goes here.....
        var evolution_array_temp = [];
        while(true) {
            console.log(evolutionObject.species.name);
            console.log(evolutionObject);
            evolution_array_temp.push(evolutionObject.species.name)
            if(evolutionObject.evolves_to.length < 1) {
                break;
            }
            evolutionObject = evolutionObject.evolves_to[0];
        }
        setPokemonEvolution({
            evolution_array : evolution_array_temp
        })
    }

    return (
        <div>
            <span className="title">Evolution chain:</span>
            <div className="row">
                { pokemonEvolution.evolution_array.map((evolutionArrayIterator, index) => 
                    <div className="col-sm-4 section--center-alignment" key={index}><span>{evolutionArrayIterator}</span></div>
                )}    
            </div>
        </div>    
    )
}
export default EvolutionCards;