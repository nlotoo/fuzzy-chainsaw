import React from 'react'
import './userMenu.css'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const UserMenu = () => {


    let navigate = useNavigate();

    let logout = () => {
        localStorage.clear();
        navigate('/')
        window.location.reload(false);

    }

    let [openMenu, setOpenMenu] = useState()

    let OpenClose = () => {
        return setOpenMenu(!openMenu)
    }

    return (

        <div className='main-container-usermenu' >
            <i onClick={OpenClose} className="fa-solid fa-circle-chevron-down user-menu-icon-style" ></i>

            {openMenu &&
                <div className='sub-menu-user-menu scale-in-top '>
                    <div className='sub-user-menu-div'>userEmail</div>
                    <div className='sub-user-menu-div'>userDetails</div>
                    <div className='sub-user-menu-div'>userName</div>
                    <div className='sub-user-menu-div'>createRecord </div>
                </div>
            }

            <div className='logout-btn ' onClick={logout}>Logout</div>
        </div >


    )
}

export default UserMenu