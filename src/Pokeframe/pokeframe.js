import React from 'react';
import Pokemon from '../Pokemon/pokemon.js';
import './pokeframe.css';
//This component will make call to PokeApi, class based component
export default class Pokeframe extends React.Component {
    //Store states here, constructor is called first when the component is created
    constructor() {
        super();
        this.state = { 
            pokemons: []
        }
    }
    //Called after DOM load. Initialisation that require DOM nodes, can go here.
    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(response => {
            this.setState({pokemons: response.results});
        })
    }
    //Call the methods with ES6 annotation, render is mandatory for components, others are optional
    render = () => {
        return (
            <div>
                <div>Render Poke-Frame</div>
                <div>
                    <ul>
                        { this.state.pokemons.map((pokemon,index) =>
                            <li key={index}>
                                <Pokemon name ={pokemon.name} url={pokemon.url}/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
