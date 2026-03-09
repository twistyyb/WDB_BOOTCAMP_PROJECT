import { useState, useEffect } from 'react'
import { PokemonCard } from '../components/PokemonCard'

export function Pokemon() {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(data => setPokemon(data.results))
        .catch(error => console.error('Error fetching pokemon:', error))
    }, [])

    console.log(pokemon)

    return (
        <>
        <h1>POKEMON!!!!</h1>
        {pokemon.map(pokemon => <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>)}
        </>
    )
}