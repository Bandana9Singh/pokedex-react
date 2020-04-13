import React, { useEffect, useState } from 'react';

import axios from 'axios';

//We get the props from the Route on App.js file. We get the id as it will be used in ajax call for specific Pokemon detail
const DetailedView = (props) => {
    const [pokemonDetail, setPokemonDetail] = useState({
        sprites: {},
        name: '',
        types: [],
        height: '',
        weight: ''
    });

    useEffect(() => {
        if (props.match.params.pokemonId) {
            var id = props.match.params.pokemonId;
            axios.get(`https://pokeapi.co/api/v2/pokemon/` + id)
            .then(function(response) {
                setPokemonDetail({
                    sprites: response.data.sprites,
                    name: response.data.name,
                    types: response.data.types,
                    height: response.data.height,
                    weight: response.data.weight
                })
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }, [props.match.params.pokemonId])
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <span>{pokemonDetail.name}</span>
                    <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name}/> 
                </div>
                <div className="col-sm-6">
                    <div>Height: {pokemonDetail.height}</div>
                    <div>Weight: {pokemonDetail.weight}</div>
                </div>
            </div>    
        </div>
    )
  }
export default DetailedView