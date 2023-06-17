import React from 'react'
import './userMenu.css'

import { useNavigate } from 'react-router-dom';
const UserMenu = () => {


    let navigate = useNavigate();

    let logout = () => {
        localStorage.setItem('userToken', null)
        navigate('/')
        window.location.reload(false);

    }
    return (

        <div className='main-container-usermenu' >
            <div>circle button UserMenu</div>

            <div> userEmail</div>
            <div>userDetails</div>
            <div>userName</div>

            <div onClick={logout}>Logout</div>
        </div >


    )
}

export default UserMenu