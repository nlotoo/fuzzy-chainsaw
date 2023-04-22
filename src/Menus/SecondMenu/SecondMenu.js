import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import { Slider } from "react-styled-carousel";
import useEmblaCarousel from 'embla-carousel-react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './secondMenu.css'


const SecondMenu = () => {

    const [isActive, setIsActive] = useState(false);




    const [myArray, setMyArray] = useState([
        <Link className='second-menu-links' to=''>Home & Livings</Link>,
        <Link className='second-menu-links' to=''>Electronics</Link>,
        <Link className='second-menu-links' to=''>Family & Kids</Link>,
        <Link className='second-menu-links' to=''>Fashion & Accessories</Link>,
        <Link className='second-menu-links' to=''>Garden & Do it Yourself</Link>,
        <Link className='second-menu-links' to=''>Culture & Leisure</Link>,
        <Link className='second-menu-links' to=''>Groceries</Link>,
        <Link className='second-menu-links' to=''>Travel</Link>,
        <Link className='second-menu-links' to=''>Sports & Outdors</Link>,
        <Link className='second-menu-links' to=''>BroadBand & Phone Contracts</Link>,
        <Link className='second-menu-links' to=''>Car 7 Motorcycle</Link>,
        <Link className='second-menu-links' to=''>Finance & Insurance</Link>,
        <Link className='second-menu-links' to=''>Services & Contracts</Link>,
        <Link className='second-menu-links' to=''>Healt & Beaty</Link>,
        <Link className='second-menu-links' to=''>Gaming</Link>,

    ]);


    const moveFirstItemToEnd = () => {
        const firstItem = myArray.shift(); // remove first item from array
        setMyArray([...myArray, firstItem]); // add first item to end of array
        setIsActive(true);
        console.log(isActive)
    };


    const moveRightItemToStart = () => {

        const lastItem = myArray.pop();
        setMyArray([lastItem, ...myArray])

    }



    return (
        <div className='categories-menu-container'>

            <div className='carosel-container'>






                <div className="second-menu-arrow-left" onClick={moveFirstItemToEnd}>
                    <i class="fa-solid fa-arrow-left-long"></i>
                </div>



                <div className="carosel-list">
                    {myArray.map((item) => (
                        <div className={"carosel-el"} key={item}>{item}</div>
                    ))}


                </div>

                <div className="second-menu-arrow-right" onClick={moveRightItemToStart}>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>

            </div>


        </div >
    )
}

export default SecondMenu