

export function PokemonCard({name, url}) {
    return (
        <div style={{border: '3px solid white', padding: '10px', margin: '10px', borderRadius: '10px'}}>
        <h2>{name}</h2>
        <h3><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></h3>
        </div>
    )
}