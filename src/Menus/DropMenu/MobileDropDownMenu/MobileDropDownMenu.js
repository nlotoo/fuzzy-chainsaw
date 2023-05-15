import './MobileDropDownMenu.css'
import React from 'react'
import { Link } from 'react-router-dom'
import useScreenSize from '../../../Hooks/useScreenSize'

const DropDownMenu = () => {

    return (
        <>
            <div className='second-categories' >
                <Link className='drop-down-menu-links all-catergories  hover-class-link' to=''><i className="fa-regular fa-folder-closed second-categories-icon"></i>All Categories</Link>
                <Link className='drop-down-menu-links' to=''>Home & Livings</Link>
                <Link className='drop-down-menu-links' to=''>Family & Kids</Link>
                <Link className='drop-down-menu-links' to=''>Garden & Do it Yourself</Link>
                <Link className='drop-down-menu-links' to=''>Groceries</Link>
                <Link className='drop-down-menu-links' to=''>Travel</Link>
                <Link className='drop-down-menu-links' to=''>Sports & Outdors</Link>
                <Link className='drop-down-menu-links' to=''>BroadBand & Phone Contracts</Link>
                <Link className='drop-down-menu-links' to=''>Finance & Insurance</Link>
                <Link className='drop-down-menu-links' to=''>Electronics</Link>
                <Link className='drop-down-menu-links' to=''>Fashion & Accessories</Link>
                <Link className='drop-down-menu-links' to=''>Culture & Leisure</Link>
                <Link className='drop-down-menu-links' to=''>Services & Contracts</Link>
                <Link className='drop-down-menu-links' to=''>Healt & Beaty</Link>
                <Link className='drop-down-menu-links' to=''>Gaming</Link>
                <Link className='drop-down-menu-links' to=''>Car 7 Motorcycle</Link>

                {/* <div className='just-line'></div> */}
                <Link className='drop-down-menu-links all-catergories hover-class-link just-line' to=''><i className="fa-solid fa-shop all-merchants-icon"></i>All merchants</Link>

                <Link className='drop-down-menu-links mechants-only' to=''>Ebay</Link>
                <Link className='drop-down-menu-links mechants-only' to=''>Currys</Link>
                <Link className='drop-down-menu-links mechants-only' to=''>Amazon</Link>
                <Link className='drop-down-menu-links mechants-only' to=''>Mark & Spencer</Link>
                <Link className='drop-down-menu-links mechants-only' to=''>Asda</Link>
                <Link className='drop-down-menu-links mechants-only' to=''>Very</Link>
                <Link className='drop-down-menu-links mechants-only' to=''>Homebase</Link>
                <Link className='drop-down-menu-links mechants-only' to=''>Boots</Link>
                <Link className='drop-down-menu-links mechants-only' to=''>Argos</Link>
                <Link className='drop-down-menu-links mechants-only' to=''>Halfords</Link>
            </div>
        </>
    )
}

export default DropDownMenu