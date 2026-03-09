import { useState } from 'react'
import { TodoItem } from '../components/todoItem'

export function Home() {

    const [todoList, setTodoList] = useState([{name: "Get Groceries", done: true}, {name: "Finish Homework", done: true}, {name: "Call Mom", done: false}, {name: "Play Poker", done: false}])

    return (
        <>
            <h1>To do list</h1>
            {todoList.map(item => <TodoItem key={item.name} name={item.name} done={item.done}/>)}
        </>
    )
}