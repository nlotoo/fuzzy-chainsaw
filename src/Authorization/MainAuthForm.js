import './mainAuthForm.css'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'




import Login from '../Forms/LoginForm/Login'
import owl from '../public/siteIcons/owl.png'
import facebookIcon from '../public/siteIcons/facebook-48.png'
import googleIcon from '../public/siteIcons/google-48.png'
import appleIcon from '../public/siteIcons/apple-logo-50.png'

const MainAuthForm = () => {

    // да се добави клас които е когато елемента скрива от екрана : трябва да е  с контекст
    let [switchCreateForm, setSwitch] = useState(false);

    const CreateAccForm = (e) => {
        setSwitch(!switchCreateForm)

    }



    return (
        <>
            <div className='main-auth-form-container slide-in-fwd-top'>
                <div className='left-side-auth-form'>
                    <p className='main-heading-auth-form'>Welcome to hotukdeals!</p>

                    <img className='auth-form-img' alt='site owl' src={owl}></img>
                    <h2 className='portal-deal-heading'>Portal Deals</h2>
                    <p className='short-desc-left-side-one'>Discover a new world of amazing deals! <span className='join-us-today'>Join us today!</span></p>
                    <p className='short-desc-left-side-two'>Portal Deals, your ultimate destination for unbeatable deals from your favorite brands!</p>

                    <div>
                        <Link className='find-out-link'>Find out more</Link>
                    </div>

                    <div>
                        <button onClick={CreateAccForm} className='create-new-user-btn'>Create a new account</button>
                    </div>
                </div>
                <div className='right-side-auth-form'>
                    <div className='social-login-container'>
                        <h2 className='heading-login'>Social Login</h2>
                        <Link className='login-social-links' to=''><img src={facebookIcon} className="login-fb-icon" />Login with Facebook</Link>
                        <Link className='login-social-links' to=''><img src={googleIcon} className="login-google-icon" />Login with Google</Link>
                        <Link className='login-social-links' to=''><img src={appleIcon} className="login-apple-icon" />Login with Apple</Link>
                    </div>
                    <Login></Login>
                </div>
            </div>
        </>

    )
}

export default MainAuthForm