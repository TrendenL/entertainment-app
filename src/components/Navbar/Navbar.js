import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import home from '../../assets/icon-nav-home.svg'
import movies from '../../assets/icon-nav-movies.svg'
import tvSeries from '../../assets/icon-nav-tv-series.svg'
import bookmark from '../../assets/icon-nav-bookmark.svg'
import avatar from '../../assets/image-avatar.png'

export default function Navbar() {
    return (
        <div className='nav-container'>
            <div className='nav'>
                <div className='top-nav'>
                    <div className='logo'><img src={logo} alt='movie logo'/></div>

                    <ul>
                        <li className='icons'><img src={home} alt='home icon'/></li>
                        <li className='icons'><img src={movies} alt='movies icon'/></li>
                        <li className='icons'><img src={tvSeries} alt='tv series icon'/></li>
                        <li className='icons'><img src={bookmark} alt='bookmark icon'/></li>
                    </ul>
                </div>

                <div className='avatar-img'><img src={avatar} alt='profile pic' /></div>
            </div>
        </div>
    )
}
