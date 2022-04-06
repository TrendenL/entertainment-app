import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import './App.css'

export default function App() {
    return (
        <div className='main-container'>
            <Navbar />
            <Home />
        </div>
    )
}
