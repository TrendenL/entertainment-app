import React from 'react'
import searchIcon from '../../assets/icon-search.svg'
import './Search.css'

export default function Search() {
    return (
        <div className='search'>
            <img src={searchIcon} alt='search icon'/>
            <input
            type='text'
            value=''
            placeholder='Search for movies or TV series'
            ></input>
        </div>
    )
}
