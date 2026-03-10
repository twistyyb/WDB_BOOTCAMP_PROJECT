

export function TodoItem({name, done}) {

    return (
        <>
        <h2>{name}: {done ? "✅" : "❌"}</h2>
        </>
    )
}
