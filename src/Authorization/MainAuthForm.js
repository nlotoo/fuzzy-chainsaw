import React from 'react'
import './mainAuthForm.css'
import owl from '../public/siteIcons/owl.png'
import { Link } from 'react-router-dom'

const MainAuthForm = () => {

    // да се добави клас които е когато елемента скрива от екрана : трябва да е  с контекст


    return (
        <>
            <div className='main-auth-form-container slide-in-fwd-top'>
                <div className='left-side-auth-form'>
                    <p className='main-heading-auth-form'>Welcome to hotukdeals!</p>

                    <img className='auth-form-img' alt='site owl' src={owl}></img>
                    <h2 className='portal-deal-heading'>Portal Deals</h2>
                    <p className='short-desc-left-side-one'>Discover a new world of amazing deals! Join us today!</p>
                    <p className='short-desc-left-side-two'>Portal Deals, your ultimate destination for unbeatable deals from your favorite brands!</p>

                    <div>
                        <Link className='find-out-link'>Find out more</Link>
                    </div>

                    <div>
                        <button className='create-new-user-btn'>Create a new account</button>
                    </div>
                </div>
                <div className='right-side-auth-form'></div>
            </div>
        </>

    )
}

export default MainAuthForm