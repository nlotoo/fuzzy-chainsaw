import './mainMenu.css'
import React, { useState, } from 'react'
import { Link, } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import portal from '../../public/siteIcons/portal.png'
import vectorArrowDown from '../../public/siteIcons/vectorArrowDown.png'
import MainAuthForm from '../../Authorization/MainAuthForm'

const MainMenu = () => {

    const [authForm, setAuthForm] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [onTarget, setTarget] = useState(false);


    const authFormMenu = (e) => {
        console.log(e)
        setAuthForm(!authForm);
    }


    const dropDownMenu = (e) => {

        console.log(e)
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
            </nav>
            {showMenu && (
                <div className="dropdown-menu slide-in-top">

                    <div className='main-categories'>
                        <Link className='drop-down-menu-links hover-class-link' to=''><i class="fa-regular fa-comments discussions-icon"></i>Discussions</Link>
                        <Link className='drop-down-menu-links hover-class-link' to=''><i class="fa-solid fa-book-open-reader buyers-guides-icon"></i>Buyer`s guides</Link>
                    </div>
                    <div className='cost-of-livings'>
                        <Link className='drop-down-menu-links' to=''>Cost of livings</Link>
                    </div>
                    <div className='second-categories first-collum-second-catergories' >
                        <Link className='drop-down-menu-links all-catergories  hover-class-link' to=''><i class="fa-regular fa-folder-closed second-categories-icon"></i>All Categories</Link>
                        <Link className='drop-down-menu-links' to=''>Home & Livings</Link>
                        <Link className='drop-down-menu-links' to=''>Family & Kids</Link>
                        <Link className='drop-down-menu-links' to=''>Garden & Do it Yourself</Link>
                        <Link className='drop-down-menu-links' to=''>Groceries</Link>
                        <Link className='drop-down-menu-links' to=''>Travel</Link>
                        <Link className='drop-down-menu-links' to=''>Sports & Outdors</Link>
                        <Link className='drop-down-menu-links' to=''>BroadBand & Phone Contracts</Link>
                        <Link className='drop-down-menu-links' to=''>Finance & Insurance</Link>
                    </div>
                    <div className='second-categories second-collum-second-catergories'>
                        <Link className='drop-down-menu-links' to=''>Electronics</Link>
                        <Link className='drop-down-menu-links' to=''>Fashion & Accessories</Link>
                        <Link className='drop-down-menu-links' to=''>Culture & Leisure</Link>
                        <Link className='drop-down-menu-links' to=''>Services & Contracts</Link>
                        <Link className='drop-down-menu-links' to=''>Healt & Beaty</Link>
                        <Link className='drop-down-menu-links' to=''>Gaming</Link>
                        <Link className='drop-down-menu-links' to=''>Car 7 Motorcycle</Link>
                    </div>

                    <div className='all-merchants first-part-merchants'>
                        <Link className='drop-down-menu-links all-catergories hover-class-link' to=''><i class="fa-solid fa-shop all-merchants-icon"></i>All merchants</Link>

                        <Link className='drop-down-menu-links mechants-only' to=''>Ebay</Link>
                        <Link className='drop-down-menu-links mechants-only' to=''>Currys</Link>
                        <Link className='drop-down-menu-links mechants-only' to=''>Amazon</Link>
                        <Link className='drop-down-menu-links mechants-only' to=''>Mark & Spencer</Link>
                        <Link className='drop-down-menu-links mechants-only' to=''>Asda</Link>
                    </div>
                    <div className='second-part-merchants'>
                        <Link className='drop-down-menu-links mechants-only' to=''>Very</Link>
                        <Link className='drop-down-menu-links mechants-only' to=''>Homebase</Link>
                        <Link className='drop-down-menu-links mechants-only' to=''>Boots</Link>
                        <Link className='drop-down-menu-links mechants-only' to=''>Argos</Link>
                        <Link className='drop-down-menu-links mechants-only' to=''>Halfords</Link>
                    </div>

                </div>
            )}



            <div className='search-bar-container'>
                <input className='search-bar' placeholder='       Search brands, products etc.' ></input>

            </div>

            <div className='register-login-btn-container'>
                <button onClick={authFormMenu} className='register-login-btn'><i class="fa-solid fa-right-to-bracket"></i>Register/Log in</button>
            </div>


            {authForm && <MainAuthForm />}



            <div className='submit-btn-container'>


                <button className='submit-btn'>
                    <i class="fa-solid fa-plus plus-icon"></i>
                    Submit</button>
            </div>


        </div >

    )
}

export default MainMenu