import React from 'react'
import './userMenu.css'

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CreateRecord from '../../Forms/createRecordForm/CreateRecord';
import { useStateContext } from '../../context/StateContext';


const UserMenu = () => {


    let { openCloseRecord, openCloseCreateRecord } = useStateContext();

    let navigate = useNavigate();

    let logout = () => {
        localStorage.clear();
        navigate('/')
        window.location.reload(false);

    }

    let [openMenu, setOpenMenu] = useState()

    let OpenClose = () => {
        setOpenMenu(!openMenu)
        return setTimeout(() => {
            console.log('in')
            setOpenMenu(false)
        }, 10000)
    }



    let userEmail = localStorage.getItem('email');





    return (

        <div className='main-container-usermenu' >
            <i onClick={OpenClose} className="fa-solid fa-circle-chevron-down user-menu-icon-style" ></i>

            {openMenu &&
                <div className='sub-menu-user-menu scale-in-top '>
                    <div className='sub-user-menu-div'>{userEmail}</div>

                    <div to='/create' className='sub-user-menu-div'><Link to='/create' className='sub-user-menu-div-link'>createRecord </Link> </div>

                </div>
            }

            {openCloseRecord && <CreateRecord />}

            <div className='logout-btn ' onClick={logout}>Logout</div>
        </div >


    )
}

export default UserMenu