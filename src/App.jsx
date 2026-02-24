import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TodoItem } from './components/todoItem'
import './App.css'

function App() {

  const [todoList, setTodoList] = useState([{name: "task1", done: True}, {name: "task2", done: False}])

  return (
    <>
      <h1>To do list</h1>
      {todoList.map(item) -> {
        
      }}
    </>
  )
}

export default App
