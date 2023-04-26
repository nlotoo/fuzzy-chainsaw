import './mainMenu.css';
import React, { useState, } from 'react';
import { Link } from 'react-router-dom';

import owl from '../../public/siteIcons/owl.png';
import vectorArrowDown from '../../public/siteIcons/vectorArrowDown.png';
import MainAuthForm from '../../Authorization/MainAuthForm';
import DropMenu from '../DropMenu/DropMenu';

import { useStateContext } from '../../context/StateContext';

const MainMenu = () => {

    let { AuthMenuState, setStateAuthMenu } = useStateContext();


    const [showMenu, setShowMenu] = useState(false);
    const [onTarget, setTarget] = useState(false);


    const authFormMenu = (e) => {
        // console.log(e)
        setStateAuthMenu(!AuthMenuState);
    }


    const dropDownMenu = (e) => {
        // console.log(e)
        setShowMenu(!showMenu);
    }



    const clicked = (e) => {
        // console.log(e.target.offsetParent.childNodes[1].className)
        if (e.target.className == 'main-menu-links') {
            e.target.offsetParent.childNodes.forEach((elementTarget) => {
                console.log(elementTarget)
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
                    <img className='portal-logo' src={owl}></img>
                </span>
                <p>
                    <Link className='logo-text' to='/'>Portal deals</Link>
                </p>
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
            </nav>

            {showMenu && <DropMenu/>}

            <div className='search-bar-container'>
                <input className='search-bar' placeholder='       Search brands, products etc.' ></input>
            </div>

            <div className='register-login-btn-container'>
                <button  onClick={authFormMenu} className='register-login-btn'><i class="fa-solid fa-right-to-bracket"></i>Register/Log in</button>
            </div>


            {AuthMenuState && <MainAuthForm />}
          


            <div className='submit-btn-container'>
                <button className='submit-btn'>
                    <i class="fa-solid fa-plus plus-icon"></i>
                    Submit</button>
            </div>
        </div >
    )
}

export default MainMenu