import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useScreenSize from "../../Hooks/useScreenSize";


const LinkMenu = () => {

    const [onTarget, setTarget] = useState(false);

    let screenSize = useScreenSize()

    const clicked = (e) => {
        // console.log(e.target.offsetParent.childNodes[1].className)
        if (e.target.className === 'main-menu-links') {
            e.target.offsetParent.childNodes.forEach((elementTarget) => {
                console.log(elementTarget)
                elementTarget.className = 'main-menu-links'
            })
            e.target.className = 'main-menu-links seleced'
        } else {
            e.target.className = 'main-menu-links'
        }
        setTarget(!onTarget)
    }
    return (
        <>
            <div className="link-menu">

                <Link onClick={clicked} className='main-menu-links' to='/home'>All</Link>
                <Link onClick={clicked} className='main-menu-links' to='/'>Deals</Link>
                <Link onClick={clicked} className='main-menu-links' to=''>Voucher Codes</Link>
                <Link onClick={clicked} className='main-menu-links' to=''>Freebies</Link>
            </div>
        </>
    )
}


export default LinkMenu