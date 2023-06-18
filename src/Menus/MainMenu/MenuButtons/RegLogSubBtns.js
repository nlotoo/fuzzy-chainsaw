import React from 'react'
import useScreenSize from '../../../Hooks/useScreenSize';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../../context/StateContext';
import { useState } from 'react';
import UserMenu from '../../UserDropDownMenu/UserMenu';


const RegLogSubBtns = () => {
    let { AuthMenuState, setStateAuthMenu, userToken } = useStateContext();

    let screenSize = useScreenSize();
    // console.log(screenSize)
    const [showMenu, setShowMenu] = useState(false);

    const authFormMenu = (e) => {
        // console.log(e)
        setStateAuthMenu(!AuthMenuState);

        if (showMenu) {
            setShowMenu(!showMenu)
        }
    }

    return (
        <>

    




            {screenSize.width < 1100
                ?
                <div className='register-login-btn-container'>
                    <button onClick={authFormMenu} className={`register-login-btn resposive-register-login-btn  ${AuthMenuState ? 'mobile-v' : ''}`}><i className="fa-regular fa-user user-icon-reg-btn"></i></button>
                </div >
                :
                <div className='register-login-btn-container'>

                    <button onClick={authFormMenu} className='register-login-btn'><i className="fa-regular fa-user  right-to-bracket"></i>Register/Log in</button>
                </div>

            }


            {/*  trqbwa da go dignba v  sobstwen element */}
            <div className='submit-btn-container'>
                {
                    screenSize.width < 1100
                        ?
                        <Link to='/submit' className='submit-btn responsive-submit-btn'><i className="fa-solid fa-plus plus-icon-responce-size"></i></Link>
                        :
                        <Link to='/submit' className='submit-btn'><i className="fa-solid fa-plus plus-icon"></i>Submit</Link>
                }

            </div>
        </>
    )
}

export default RegLogSubBtns