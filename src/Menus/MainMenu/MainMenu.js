import React from 'react'
import './mainMenu.css'
import { Link } from 'react-router-dom'
import portal from '../../public/siteIcons/portal.png'
const MainMenu = () => {
    return (
        <div className='main-menu-container'>


            <div className='site-logo'>
                <span>
                    <img className='portal-logo' src={portal}></img>
                </span>
                <p> Portal deals</p>
            </div>

            <nav className='main-menu-nav'>
                <Link className='main-menu-links' to=''>All</Link>
                <Link className='main-menu-links' to=''>Deals</Link>
                <Link className='main-menu-links' to=''>Voucher Codes</Link>
                <Link className='main-menu-links' to=''>Freebies</Link>
                <button className='main-menu-links-button'>Menu</button>
            </nav>
            <div className='search-bar-container'>
                <input className='search-bar' ></input>
            </div>

            <div className='register-login-btn'>
                <button>Register/Log in</button>
            </div>

            <div className='submit-container'>
                <button>submit</button>
            </div>
        </div>

    )
}

export default MainMenu