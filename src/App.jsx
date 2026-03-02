import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TodoItem } from './components/todoItem'
import './App.css'

function App() {

  const [todoList, setTodoList] = useState([{name: "Get Groceries", done: true}, {name: "Finish Homework", done: true}, {name: "Call Mom", done: false}, {name: "Play Poker", done: false}])

  return (
    <>
      <h1>To do list</h1>
      {todoList.map(item => <TodoItem key={item.name} name={item.name} done={item.done}/>)}
    </>
  )
}

export default App
