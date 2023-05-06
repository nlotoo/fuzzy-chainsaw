import './dropMenu.css'
import React from 'react'
import { Link } from 'react-router-dom'


const DropMenu = () => {
    return (
        <div className="dropdown-menu slide-in-top">





            <div className='main-categories'>
                <Link className='link-menu-in-drop-down-menu hover-class-link' to='/home'><i class="fa-solid fa-house discussions-icon"></i>All</Link>
                <Link className='link-menu-in-drop-down-menu hover-class-link' to='/'><i class="fa-solid fa-tag discussions-icon"></i>Deals</Link>
                <Link className='link-menu-in-drop-down-menu hover-class-link' to=''><i class="fa-solid fa-scissors discussions-icon"></i>Voucher Codes</Link>
                <Link className='link-menu-in-drop-down-menu hover-class-link' to=''><i class="fa-solid fa-sterling-sign discussions-icon"></i>Freebies</Link>
                <Link className='drop-down-menu-links hover-class-link' to=''><i className="fa-regular fa-comments discussions-icon"></i>Discussions</Link>
                <Link className='drop-down-menu-links hover-class-link' to=''><i className="fa-solid fa-book-open-reader buyers-guides-icon"></i>Buyer`s guides</Link>
            </div>
            <div className='cost-of-livings'>
                <Link className='drop-down-menu-links' to=''>Cost of livings</Link>
            </div>
            <div className='second-categories first-collum-second-catergories' >
                <Link className='drop-down-menu-links all-catergories  hover-class-link' to=''><i className="fa-regular fa-folder-closed second-categories-icon"></i>All Categories</Link>
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
                <Link className='drop-down-menu-links all-catergories hover-class-link' to=''><i className="fa-solid fa-shop all-merchants-icon"></i>All merchants</Link>

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
    )
}

export default DropMenu