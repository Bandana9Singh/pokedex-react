import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './detailedView.css';
import EvolutionCards from '../EvolutionCards/evolutionCards.js';

//We get the props from the Route on App.js file. We get the id as it will be used in ajax call for specific Pokemon detail
const DetailedView = (props) => {
    const [pokemonDetail, setPokemonDetail] = useState({
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

    const [kantoImage, setKantoImage] = useState ({
        image_src: ''
    });

    useEffect(() => {
        if (props.match.params.pokemonId) {
            var id = props.match.params.pokemonId;
            axios.get(`https://pokeapi.co/api/v2/pokemon/` + id)
            .then(function(response) {
                setPokemonDetail({
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
            setKantoImage({
                image_src: "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png"
            })
        }
    }, [props.match.params.pokemonId]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <img src={kantoImage.image_src} alt={pokemonDetail.name}/>
                    {/*<div className="pokemon-image" style={{backgroundImage:`url(${pokemonDetail.sprites.front_default})`}}></div>*/}
                </div>
                <div className="col-sm-4 section--left-alignment">
                    <div><span className="title">Name: </span><span>{pokemonDetail.name}</span></div>
                    <div><span className="title">Height:</span><span>{pokemonDetail.height}</span></div>
                    <div><span className="title">Weight:</span><span>{pokemonDetail.weight}</span></div>
                    <div>
                        <span className="title">Type:</span>
                        <ul>
                            { pokemonDetail.types.map((type,index) =>
                                <li key={index}>{type.type.name}</li>
                            )}
                        </ul>
                        <span className="title">Ability:</span>
                        <ul>
                            { pokemonDetail.abilities.map((ability,index) =>
                                <li key={index}>{ability.ability.name}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4 section--left-alignment">
                    <span className="title">Stats:</span>
                    <ul>
                        { pokemonDetail.stats.map((statIterator, index) => 
                            <li key={index}><span>{statIterator.stat.name}: </span>{statIterator.base_stat}</li>
                        )}
                    </ul>
                </div>
            </div> 
            <EvolutionCards pokemonId={props.match.params.pokemonId}/>
        </div>
    )
  }
export default DetailedView