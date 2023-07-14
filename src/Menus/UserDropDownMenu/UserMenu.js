import React from 'react'
import './userMenu.css'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CreateRecord from '../../Forms/createRecordForm/CreateRecord';
const UserMenu = () => {

    // da го преместя  в openCloseRecord контекста

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



    let userEmail = localStorage.getItem('email');


    let [openCloseRecord, setOpenCloseRecord] = useState(false);


    let openCloseCreateRecord = () => {

        return setOpenCloseRecord(!openCloseRecord)
    }



    

    return (

        <div className='main-container-usermenu' >
            <i onClick={OpenClose} className="fa-solid fa-circle-chevron-down user-menu-icon-style" ></i>

            {openMenu &&
                <div className='sub-menu-user-menu scale-in-top '>
                    <div className='sub-user-menu-div'>{userEmail}</div>
                    <div onClick={openCloseCreateRecord} className='sub-user-menu-div'>createRecord</div>
                </div>
            }

            {openCloseRecord && <CreateRecord />}

            <div className='logout-btn ' onClick={logout}>Logout</div>
        </div >


    )
}

export default UserMenu