import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="homebg">
            <div className="container">
                <h1>Welcome to Recipes.com</h1>
                <Link to ="/recipes">
                <button>Browse Recipes</button>
                </Link>
            </div>
        </div>
    )
}
