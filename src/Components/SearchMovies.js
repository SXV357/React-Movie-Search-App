import React from 'react'

export default function SearchMovies(){

    require('dotenv').config()
    const api_key = process.env.API_KEY;
    
    return (
        <div>
            <form className = "form">
                <label htmlFor = "query" className = "label">Movie Name</label>
                <input className = "input" type = "text" name = "query" placeholder= "Search Movies"></input>
                <button type = "submit" className = "button">Search</button>
            </form>
        </div>
    )
}