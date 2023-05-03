import './mainMenuResponsive.css'
import './mainMenu.css';
import React, { useState, } from 'react';
import { Link } from 'react-router-dom';

import owl from '../../public/siteIcons/owl.png';
import vectorArrowDown from '../../public/siteIcons/vectorArrowDown.png';
import MainAuthForm from '../../Authorization/MainAuthForm';
import DropMenu from '../DropMenu/DropMenu';

import { useStateContext } from '../../context/StateContext';
import useScreenSize from '../../Hooks/useScreenSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RegLogSubBtns from '../MenuButtons/RegLogSubBtns';

const MainMenu = () => {

    let { AuthMenuState, setStateAuthMenu, switchOffAuthMenu } = useStateContext();

    let screenSize = useScreenSize();
    console.log(screenSize)



    const [showMenu, setShowMenu] = useState(false);
    const [onTarget, setTarget] = useState(false);


    const authFormMenu = (e) => {
        // console.log(e)
        setStateAuthMenu(!AuthMenuState);

        if (showMenu) {
            setShowMenu(!showMenu)
        }
    }


    const dropDownMenu = (e) => {
        // console.log(e)
        setShowMenu(!showMenu);


        if (AuthMenuState) {
            switchOffAuthMenu();
        }

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

            {showMenu && <DropMenu />}
            <div className='search-bar-container'>

                <input className='search-bar' placeholder={'Search brands, products etc.'} ></input>
            </div>
            {AuthMenuState && <MainAuthForm />}

            {<RegLogSubBtns />}

            {/* <div className='end-btn-main-menu'> */}
            {/* {screenSize.width < 1100
                ?
                <div className='register-login-btn-container'>
                    <button onClick={authFormMenu} className='register-login-btn resposive-register-login-btn'><i class="fa-regular fa-user user-icon-reg-btn"></i></button>
                </div>
                :
                <div className='register-login-btn-container'>

                    <button onClick={authFormMenu} className='register-login-btn'><i class="fa-regular fa-user  right-to-bracket"></i>Register/Log in</button>
                </div>
            }

            <div className='submit-btn-container'>
                {
                    screenSize.width < 1100
                        ?
                        <Link to='/submit' className='submit-btn responsive-submit-btn'><i className="fa-solid fa-plus plus-icon-responce-size"></i></Link>
                        :
                        <Link to='/submit' className='submit-btn'><i className="fa-solid fa-plus plus-icon"></i>Submit</Link>
                }

            </div> */}

            {/* </div> */}

        </div >
    )
}

export default MainMenu