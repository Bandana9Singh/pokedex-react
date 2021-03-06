import React from 'react';

import Pokemon from '../Pokemon/pokemon.js';
import './pokeframe.css';

//This component will make call to PokeApi, class based component
export default class Pokeframe extends React.Component {
    //Store states here, constructor is called first when the component is created
    constructor() {
        super();
        this.state = { 
            pokemons: [], 
            scrolledPokemon: [],
            pageNumber: 0,
            pageOffset: 0, 
            limit: 15, 
            isFetching: false,
        }
    }
    /* Called after DOM load. Initialisation that require DOM nodes, can go here.
     * As per the pokeapi.io, to fetch next 20 results set offset. By deafult showing 20 resource in a page. 
     **/
    componentDidMount() {
        this.getAllPokemon();
        window.addEventListener('scroll', this.handleScroll);
    }

    /* Function called whenever state changed*/
    componentDidUpdate() {
        if (!this.state.isFetching) 
            return;
        this.getAllPokemon();
    }

    getAllPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.state.limit}&offset=${this.state.pageOffset}`)
        .then(res => res.json())
        .then(response => {
            //Add the list to an empty array to keep adding new list
            this.state.scrolledPokemon.push(...response.results);
            this.setState({pokemons: this.state.scrolledPokemon});
        });
        //Set isFetching to false, very imp
        this.setState({isFetching: false});
    }
    
    handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight)
            return; 
        this.setState({
            isFetching: true, 
            pageOffset: this.state.pageOffset + 15
        });
    }

    //Call the methods with ES6 annotation, render is mandatory for components, others are optional
    render = () => {
        return (
            <div>
                <div>gotta catch em all</div>
                <div>
                    <div className="container">
                        <div className="row">
                            { this.state.pokemons.map((pokemon,index) =>
                                <div className="col-sm-4 justify-content-center my-5" key={index}>
                                    <Pokemon name={pokemon.name} url={pokemon.url}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
