import { useState, useEffect } from 'react'
import { PokemonCard } from '../components/PokemonCard'

export function Pokemon() {
    const [pokemon, setPokemon] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:3001/pokemon?page=${page}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPokemon(data)
        })
    }, [page])

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>POKEMON</h1>
            <p style={{marginTop: -5}}>Click on a card to see more information!</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button onClick={() => setPage(Math.max(1, page - 1))}>&larr;</button>
                <p>Page {page}</p>
                <button onClick={() => setPage(page + 1)}>&rarr;</button>
            </div>
            {pokemon.map(pokemon => <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.sprite_url}/>)}
        </div>
        
    )
}