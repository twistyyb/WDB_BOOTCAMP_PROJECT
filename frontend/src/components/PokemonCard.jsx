import { useState } from 'react'

export function PokemonCard({name, url}) {
    const [flipped, setFlipped] = useState(false)
    const [flippedReady, setFlippedReady] = useState(false)
    const [data, setData] = useState(null)
    const [hasLoaded, setHasLoaded] = useState(false)

    const handleFlip = () => {
        setFlipped(prev => {
            const next = !prev
            if (next && !hasLoaded) {
                fetch(`http://localhost:3001/pokemon/${name}`)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                    setHasLoaded(true)
                    setFlippedReady(true)
                });
            } else if (next && hasLoaded) {
                setFlippedReady(true)
            } else {
                setFlippedReady(false)
            }
            return next
        })
    }

    return (
        <div style={{border: '3px solid grey', padding: '10px', margin: '10px', borderRadius: '10px', cursor: 'pointer', height: '200px', width: '280px'}} onClick={handleFlip}>
        <h2>{name}</h2>
        {flippedReady?
        <>
        <p>Abilities: {data.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <p>Height: {data.height}</p>
        <p>Base Experience: {data.base_experience}</p>
        </>
        :
        <img src={url} alt={name} />
        }
        </div>
    )
}