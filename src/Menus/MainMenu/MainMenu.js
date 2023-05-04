import './mainMenuResponsive.css'
import './mainMenu.css';
import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';

import owl from '../../public/siteIcons/owl.png';
import vectorArrowDown from '../../public/siteIcons/vectorArrowDown.png';

import useScreenSize from '../../Hooks/useScreenSize';
import RegLogSubBtns from './MenuButtons/RegLogSubBtns';
import DropMenu from '../DropMenu/DropMenu';
import MainAuthForm from '../../Authorization/MainAuthForm';
import LinkMenu from '../LinkMenu/LinkMenu';


const MainMenu = () => {

    let { AuthMenuState, switchOffAuthMenu } = useStateContext();

    let screenSize = useScreenSize();
    console.log(screenSize)



    const [showMenu, setShowMenu] = useState(false);


    // const authFormMenu = (e) => {
    //     // console.log(e)
    //     setStateAuthMenu(!AuthMenuState);

    //     if (showMenu) {
    //         setShowMenu(!showMenu)
    //     }
    // }


    const dropDownMenu = (e) => {
        // console.log(e)
        setShowMenu(!showMenu);


        if (AuthMenuState) {
            switchOffAuthMenu();
        }

    }





    return (
        <div className='main-menu-container'>

            <div className='site-logo'>
                <span>
                    <img alt='owl-logo' className='portal-logo' src={owl}></img>
                </span>
                <p>
                    <Link className='logo-text' to='/'>Portal deals</Link>
                </p>
            </div>

            <nav className='main-menu-nav'>

                {
                    screenSize.width > 870 &&
                    <LinkMenu/>

                }



                <span>
                    <button onClick={dropDownMenu} className='main-menu-links-button'>Menu
                        <img alt='vector-arrow-down' className='vectorArrowDown' src={vectorArrowDown}></img>
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