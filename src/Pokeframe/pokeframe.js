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
            pageNumber: 0,
            pageOffset: 0
        }
    }
    /* Called after DOM load. Initialisation that require DOM nodes, can go here.
     * As per the pokeapi.io, to fetch next 20 results set offset. Bydeafult showing 20 resource in a page. 
     **/
    componentDidMount() {
        this.getAllPokemon();
    }

    getAllPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.state.pageOffset}`)
        .then(res => res.json())
        .then(response => {
            this.setState({pokemons: response.results});
        })
    }

    // method called on clicking the previous button
    previousButtonHandler = () => {
        this.setState({
            pageNumber: this.state.pageNumber - 1,
            pageOffset: this.state.pageNumber * 20
        })
        this.getAllPokemon();
    }

    // method called on clicking the next button
    nextButtonHandler = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1,
            pageOffset: this.state.pageNumber * 20
        })
        this.getAllPokemon();
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
                                <div className="col-sm-3" key={index}>
                                    <Pokemon name ={pokemon.name} url={pokemon.url}/>
                                </div>
                            )}
                        </div>
                    </div>
                    <button onClick={this.previousButtonHandler}>Previous</button>
                    <button onClick={this.nextButtonHandler}>Next</button>
                </div>
            </div>
        )
    }
}
