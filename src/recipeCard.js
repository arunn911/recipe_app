import React from 'react'

export const RecipeCard = ({item}) => {
    return (
        <div className="card">
            <div className="img">
                <img src={item.img} alt="food"/>
            </div>
            <div className="info">
                <h3>{item.title}</h3>
                <div className="bar">
                    <div>
                        <p>{item.desc}</p>
                    </div>
                    <div>
                        <p>{item.time}</p>
                    </div>
                </div>
                <div className="btn">
                <button>Recipe</button>
                </div>
                
            </div>
        </div>
    )
}
