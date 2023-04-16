import React, { useState } from 'react'
import './mainMenu.css'
import { Link, } from 'react-router-dom'
import portal from '../../public/siteIcons/portal.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import vectorArrowDown from '../../public/siteIcons/vectorArrowDown.png'

const MainMenu = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [onTarget, setTarget] = useState(false)

    const dropDownMenu = () => {

        setShowMenu(!showMenu);
    }


    const clicked = (e) => {
        // console.log(e.target.offsetParent.childNodes[1].className)

        if (e.target.className == 'main-menu-links') {
            e.target.offsetParent.childNodes.forEach((elementTarget) => {
                elementTarget.className = 'main-menu-links'
            })
            e.target.className = 'main-menu-links seleced'
        } else {
            e.target.className = 'main-menu-links'
        }
        setTarget(!onTarget)
    }

    return (
        <div className='main-menu-container'>


            <div className='site-logo'>



                <span>
                    <img className='portal-logo' src={portal}></img>
                </span>
                <p> Portal deals</p>
            </div>

            <nav className='main-menu-nav'>
                <Link onClick={clicked} className='main-menu-links' to='/home'>All</Link>
                <Link onClick={clicked} className='main-menu-links' to='/'>Deals</Link>
                <Link onClick={clicked} className='main-menu-links' to=''>Voucher Codes</Link>
                <Link onClick={clicked} className='main-menu-links' to=''>Freebies</Link>


                <span>
                    <button onClick={dropDownMenu} className='main-menu-links-button'>Menu
                        <img className='vectorArrowDown' src={vectorArrowDown}></img>
                    </button>
                </span>

                {showMenu && (
                    <div className="dropdown-menu">

                        <a className='dropDown-links' href="#certificate">CERTIFICATES</a>
                        <a className='dropDown-links' href="#skills">SKILLS</a>
                        <a className='dropDown-links' href="#aboutMe">MEET ME</a>
                    </div>
                )}

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
        </div >

    )
}

export default MainMenu