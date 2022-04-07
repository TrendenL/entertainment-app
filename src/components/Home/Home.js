import React from 'react'
import Search from '../Search/Search'
import './Home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <Search />
            <div className='home-content'>
                {/* <h1>Home</h1> */}
            </div>
        </div>
    )
}
