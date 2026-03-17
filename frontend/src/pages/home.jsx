import { useState } from 'react'
import { TodoItem } from '../components/todoItem'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <>
            <h1>Welcome to Bryan's Bootcamp App!</h1>
            <Link to="/pokemon">
                <button>Check out my Pokemon collection!</button>
            </Link>
            
        </>
    )
}