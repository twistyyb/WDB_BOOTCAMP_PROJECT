import { useState, useEffect } from 'react'

export function PokemonCard({name}) {
    const [flipped, setFlipped] = useState(false)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [success, setSuccess] = useState(false)


    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:3001/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.success)
            if (data.success) {
                setData(data.data)
                setSuccess(true)
                setLoading(false)
            } else {
                setData(null)
                setSuccess(false)
                setLoading(false)
            }
        })
        .catch(error => {
            console.error('Error fetching pokemon:', error)
        })
    }, [name])


    return (
        <div
            style={{border: '3px solid grey', padding: '10px', margin: '10px', borderRadius: '10px', cursor: 'pointer', height: '200px', width: '280px'}}
            onClick={() => setFlipped(prev => !prev)}
        >

        
        {loading? 
        <p>Loading...</p>
        :
        <>
            {!success ? <p>No Pokemon Found</p> :
            <>
            <h2>{name}</h2>
            {flipped?
            <>
            <p>Abilities: {data.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <p>Height: {data.height}</p>
            <p>Base Experience: {data.base_experience}</p>
            </>
            :
            <img src={data.sprites.front_default} alt={data.name} />
            }
            </>
            }
        </>
        }
        </div>
    )
}