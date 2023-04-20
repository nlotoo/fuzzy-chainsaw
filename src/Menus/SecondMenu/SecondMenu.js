import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import { Slider } from "react-styled-carousel";
import useEmblaCarousel from 'embla-carousel-react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './secondMenu.css'


const SecondMenu = () => {

    let [curentIndex, setCurentIndex] = useState(0);
    let [curentArray, setCurentArray] = useState();

    const caroselListRef = useRef(null);


    let arrayOfCategorie = [1, 2, 3, 4, 5, 6, 7, 8, 9];



    let caroselList = caroselListRef?.current?.childNodes

    useEffect(() => {

    }, [arrayOfCategorie])


    const moveLeft = (e) => {

        let firstElement = arrayOfCategorie.shift()
        arrayOfCategorie.push(firstElement)
        // arrayOfCategorie(arrayOfCategorie)
        console.log(arrayOfCategorie)

    }
    // const moveRight = (e) => {

    //     let lastElement = arrayOfCategorie.pop()
    //     arrayOfCategorie.push(lastElement)
    //     console.log(arrayOfCategorie)

    // }


    return (
        <div className='categories-menu-container'>

            <div className='carosel-container'>



                <div className="morning-class">
                    <div onClick={moveLeft}>
                        <p>left</p>
                    </div>



                    <div className="carosel-list">
                        {arrayOfCategorie.map((el, index) => {
                            return (
                                <div>
                                    <h3 key={index} className="carosel-el">{el}</h3>
                                </div>
                            )
                        })
                        }


                    </div>

                    {/* <div onClick={moveRight}>
                        <p>right</p>
                    </div> */}

                </div>
            </div>


        </div>
    )
}

export default SecondMenu