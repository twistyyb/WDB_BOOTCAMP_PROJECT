import { useState, useEffect } from 'react'
import { PokemonCard } from '../components/PokemonCard'

export function Pokemon() {
    const [pokemon, setPokemon] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3001/pokemon?page=${page}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.sprites)
            setPokemon(data)
        })
    }, [page])

    return (
        <>
        <h1>POKEMON</h1>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p style={{marginTop: -5}}>Click on a card to see more information</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button onClick={() => setPage(Math.max(1, page - 1))}>&larr;</button>
                    <p>Page {page}</p>
                    <button onClick={() => setPage(page + 1)}>&rarr;</button>
                </div>
                {pokemon && pokemon.map(pokemon => <PokemonCard key={pokemon.name} name={pokemon.name}/>)}
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p style={{marginTop: -5}}>... or search for a specific pokemon!</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <input type="text" placeholder="pokemon name..." value={search} onChange={e => setSearch(e.target.value)}/>                   
                </div>
                {search && <PokemonCard name={search}/>}
                
            </div>
        </div>
        </>
        
    )
}