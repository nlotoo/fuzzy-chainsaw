import './mainMenu.css';
import './mainMenuResponsive.css'
import './hamburger-menu.css'

import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';

import owl from '../../public/siteIcons/owl.png';
import vectorArrowDown from '../../public/siteIcons/vectorArrowDown.png';

import useScreenSize from '../../Hooks/useScreenSize';
import RegLogSubBtns from './MenuButtons/RegLogSubBtns';
import DropMenu from '../DropMenu/DropMenu';
import MainAuthForm from '../../Authorization/MainAuthForm';


const MainMenu = () => {

    let { AuthMenuState, switchOffAuthMenu, showMenu, setShowMenu } = useStateContext();

    let screenSize = useScreenSize();


    let [searchBarSwitch, setSwitchBar] = useState(false);

    const switchBarClicked = () => {
        setSwitchBar(!searchBarSwitch)
    }

    const dropDownMenu = (e) => {
        setShowMenu(!showMenu);

        if (AuthMenuState) {
            switchOffAuthMenu();
        }

    }


    const [onTarget, setTarget] = useState(false);

    // let screenSize = useScreenSize()

    const clicked = (e) => {
        // console.log(e.target.offsetParent.childNodes[1].className)
        console.log(e.target)
        if (e.target.className === 'main-menu-links') {
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
            {
                screenSize.width < 680 &&
                <div onClick={dropDownMenu} className={`hamburger-menu ${showMenu && 'hamburger-active'}`} >
                    <div className='hamburger-line-one'></div>
                    <div className='hamburger-line-two'></div>
                    <div className='hamburger-line-three'></div>
                </div>
            }

            {!searchBarSwitch &&

                <div className='site-logo scale-in-top'>

                    {screenSize.width > 440 &&
                        <span>
                            <img alt='owl-logo' className='portal-logo mobile-owl' src={owl}></img>
                        </span>

                    }
                    <p>
                        <Link className='logo-text' to='/'>Portal deals</Link>
                    </p>
                </div>
            }

            <nav className='main-menu-nav'>

                {
                    screenSize.width > 870 &&

                    <>
                        <Link onClick={clicked} className='main-menu-links' to='/home'>All</Link>
                        <Link onClick={clicked} className='main-menu-links' to='/'>Deals</Link>
                        <Link onClick={clicked} className='main-menu-links' to=''>Voucher Codes</Link>
                        <Link onClick={clicked} className='main-menu-links' to=''>Freebies</Link>
                    </>
                }



                <span>
                    {/* <button onClick={dropDownMenu} className={showMenu == true ? 'main-menu-links-button' : 'main-menu-links-button asd'}>Menu */}
                    <button onClick={dropDownMenu} className={`main-menu-links-button ${showMenu ? 'active-menu-links' : ''}`}>Menu
                        {showMenu
                            ?
                            <img alt='vector-arrow-down' className='vectorArrowDown' src={vectorArrowDown}></img>
                            :
                            <img alt='vector-arrow-down' className='vectorArrowDown-up' src={vectorArrowDown}></img>
                        }
                    </button>
                </span>
            </nav>

            {showMenu && <DropMenu />}

            {screenSize.width < 680 ? <button onClick={switchBarClicked} className='search-resposive-button'><i class="fa-solid fa-magnifying-glass"></i></button> : ''}

            {/* {console.log(searchBarSwitch)} */}


            {/* <div className={`search-bar-container ${searchBarSwitch ? 'active-responsive-search-bar' : ''}`}> */}
            <div className={`${searchBarSwitch ? 'in-visble-bar scale-in-top ' : 'search-bar-container '}`}>
                <input className='search-bar' placeholder={'Search brands, products etc.'} ></input>
            </div>

            {AuthMenuState && <MainAuthForm />}

            {<RegLogSubBtns />}



        </div >
    )
}

export default MainMenu