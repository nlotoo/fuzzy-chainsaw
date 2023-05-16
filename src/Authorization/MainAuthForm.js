import './mainAuthForm.css'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'




import Login from '../Forms/LoginForm/Login'
import owl from '../public/siteIcons/owl.png'
import facebookIcon from '../public/siteIcons/facebook-48.png'
import googleIcon from '../public/siteIcons/google-48.png'
import appleIcon from '../public/siteIcons/apple-logo-50.png'
import Register from '../Forms/RegisterForm/Register'

import { useStateContext } from '../context/StateContext'

const MainAuthForm = () => {




    let { switchOffAuthMenu } = useStateContext();


    let [switchCreateForm, setSwitch] = useState(false);
    let [findOutMore, setFindOutMore] = useState(false);

    const CreateAccForm = (e) => {
        setSwitch(!switchCreateForm)

    }

    const FindOutMore = (e) => {

        setFindOutMore(!findOutMore)



    }

    const translateBetwenMenus = (e) => {
        setFindOutMore(!findOutMore);
        setSwitch(!switchCreateForm)
    }



    return (
        < >


            {findOutMore === true
                ?
                <div className='main-auth-form-container slide-in-fwd-top'>
                    <span onClick={switchOffAuthMenu} className='exit-form'>X</span>
                    <div className='left-side-auth-form'>
                        <p className='main-heading-auth-form'>Welcome to portal deals!</p>

                        <img className='auth-form-img-find-out' alt='site owl' src={owl}></img>
                        <h2 className='portal-deal-heading'>Portal Deals</h2>

                        <div>
                            <p className='short-desc-left-side-find-out-one'>Join thousands of other savvy shoppers sharing their deals, vouchers and tips! </p>
                            <p className='short-desc-left-side-find-out-two'>Discover the unbeatable  deals from your favorite brands at Portal Deals</p>
                        </div>




                        <div>
                            <button onClick={FindOutMore} className='create-new-user-btn-alrd'>Already have an account?</button>
                        </div>
                    </div>
                    <div className='right-side-auth-form-find-out'>
                        <div>
                            <h3 className='heading-find-out-more'>
                                <i className="fa-regular fa-comment find-out-icon"></i>
                                Join the community
                            </h3>
                            <p className='find-out-more-text-left'>
                                Discuss the latest products and deals with the community, then vote to decide which deals are the hottest and which aren't.
                            </p>
                        </div>
                        <div>
                            <h3 className='heading-find-out-more'>
                                <i className="fa-solid fa-tag find-out-icon"></i>
                                Share your own deals
                            </h3>
                            <p className='find-out-more-text-left'>
                                Found a great deal either online or in-store? Share it on hotukdeals and let everyone know!
                            </p>
                        </div>
                        <div>
                            <h3 className='heading-find-out-more'>
                                <i className="fa-regular fa-bell find-out-icon"></i>
                                Never miss a deal again
                            </h3>
                            <p className='find-out-more-text-left'>
                                Follow deals and subscribe to alerts to ensure you get the best price at the right time.
                            </p>
                        </div>
                        <button onClick={translateBetwenMenus} className='create-new-user-btn-find-out'> Create a new account</button>
                    </div>
                </div>


                :
                <div className='main-auth-form-container slide-in-fwd-top'>
                    <span onClick={switchOffAuthMenu} className='exit-form'>X</span>

                    <div className='left-side-auth-form'>
                        <p className='main-heading-auth-form'>Welcome to hotukdeals!</p>

                        <img className='auth-form-img' alt='site owl' src={owl}></img>
                        <h2 className='portal-deal-heading'>Portal Deals</h2>

                        {
                            switchCreateForm === true
                                ?
                                <div>
                                    <h2 className='heading-signup'>Social Sign up</h2>
                                    <Link className='login-social-links' to=''><img alt='social-media' src={facebookIcon} className="login-fb-icon" />Sign up with Facebook</Link>
                                    <Link className='login-social-links' to=''><img alt='social-media' src={googleIcon} className="login-google-icon" />Sign up with Google</Link>
                                    <Link className='login-social-links' to=''><img alt='social-media' src={appleIcon} className="login-apple-icon" />Sign up with Apple</Link>
                                </div> :
                                <>
                                    <p className='short-desc-left-side-one'>Discover a new world of amazing deals! <span className='join-us-today'>Join us today!</span></p>
                                    <p className='short-desc-left-side-two'>Portal Deals, your ultimate destination for unbeatable deals from your favorite brands!</p>
                                </>

                        }


                        <div>
                            <button onClick={FindOutMore} className='find-out-link'>Find out more</button>

                        </div>

                        <div>
                            {
                                switchCreateForm === true
                                    ?
                                    <button onClick={CreateAccForm} className='create-new-user-btn-alrd'>Already have an account?</button>
                                    :
                                    <button onClick={CreateAccForm} className='create-new-user-btn'>Create a new account</button>
                            }
                        </div>
                    </div>
                    <div className='right-side-auth-form'>

                        {
                            switchCreateForm === true
                                ?
                                <div>

                                    <Register></Register>
                                </div>
                                :
                                <div className='social-login-container'>
                                    <h2 className='heading-login'>Social Login</h2>
                                    <Link className='login-social-links' to=''><img alt='social-media' src={facebookIcon} className="login-fb-icon" />Login with Facebook</Link>
                                    <Link className='login-social-links' to=''><img alt='social-media' src={googleIcon} className="login-google-icon" />Login with Google</Link>
                                    <Link className='login-social-links' to=''><img alt='social-media' src={appleIcon} className="login-apple-icon" />Login with Apple</Link>
                                    <Login></Login>
                                </div>
                        }
                    </div>
                </div >
            }

        </>

    )
}

export default MainAuthForm