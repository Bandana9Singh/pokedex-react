import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EvolutionCards = (props) => {
    const [evolutionURL, setEvolutionURL] = useState({
        evolution_chain: {}
    });
    const [pokemonEvolution, setPokemonEvolution] = useState({
        evolution_array: [{
            pokemon_name: ''
        }]
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

    function getEvolutionArray(object) {
        //While loop for iterating the chain goes here.....
    }

    return (
        <div>
            {evolutionURL.evolution_chain.url}
        </div>
    )
}
export default EvolutionCards;