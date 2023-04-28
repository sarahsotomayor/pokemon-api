import React, { useState, useEffect } from 'react';

const PokemonList = (props) => {

const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .then(response => console.log(response))

        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <header>
                <h1>Pokemon API</h1>
            </header>
            <section>
                <ul>
                {
                    pokemon.length > 0 && pokemon.map((pokemon, index) => {
                    return (<div key={index}>{pokemon.name}</div>)
                    })
                }
                </ul>
            </section>
        </div>
        );

}


export default PokemonList;