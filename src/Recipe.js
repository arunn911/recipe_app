import React from 'react'
import { RecipeCard } from './recipeCard'

export const Recipe = ({item}) => {
    return (
        <div className="recipecontainer">
           {item.map((food) => <RecipeCard key={food.id} item={food}/>)}
        </div>
    )
}
