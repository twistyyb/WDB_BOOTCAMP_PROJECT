

export function TodoItem(name, done) {

    return (
        <>
        <h1>A Task</h1>
        <h2>Task name: {name}</h2>
        <p>done: {done ? "YES" : "NO"}</p>
        
        </>
    )
}
