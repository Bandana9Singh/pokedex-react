import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './detailedView.css';

//We get the props from the Route on App.js file. We get the id as it will be used in ajax call for specific Pokemon detail
const DetailedView = (props) => {
    const [pokemonDetail, setPokemonDetail] = useState({
        sprites: {},
        name: '',
        height: '',
        weight: '', 
        types: [],
        abilities: [], 
        stats: [{
            base_stat: 0,
            stat: {}
        }]
    });

    useEffect(() => {
        if (props.match.params.pokemonId) {
            var id = props.match.params.pokemonId;
            axios.get(`https://pokeapi.co/api/v2/pokemon/` + id)
            .then(function(response) {
                setPokemonDetail({
                    sprites: response.data.sprites,
                    name: response.data.name,
                    height: response.data.height,
                    weight: response.data.weight,
                    types: response.data.types,
                    abilities: response.data.abilities,
                    stats: response.data.stats
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
                <div className="col-sm-4">
                    <div class="pokemon-image"></div>
                    <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name}/> 
                </div>
                <div className="col-sm-4 section--left-alignment">
                    <div><span>Name:</span> {pokemonDetail.name}</div>
                    <div><span>Height:</span> {pokemonDetail.height}</div>
                    <div><span>Weight:</span> {pokemonDetail.weight}</div>
                    <div>
                        <span>Type:</span>
                        <ul>
                            { pokemonDetail.types.map((type,index) =>
                                <li key={index}>{type.type.name}</li>
                            )}
                        </ul>
                        <span>Ability:</span>
                        <ul>
                            { pokemonDetail.abilities.map((ability,index) =>
                                <li key={index}>{ability.ability.name}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4 section--left-alignment">
                    <span>Stats:</span>
                    <ul>
                        { pokemonDetail.stats.map((statIterator, index) => 
                            <li key={index}><span>{statIterator.stat.name}: </span>{statIterator.base_stat}</li>
                        )}
                    </ul>
                </div>
            </div>    
        </div>
    )
  }
export default DetailedView