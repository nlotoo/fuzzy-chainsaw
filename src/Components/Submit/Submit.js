import React from 'react'
import SubmitAuthHoc from '../../HOCs/SubmitAuthHOC'
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import { useEffect } from 'react';

const Submit = () => {

    let { switchOffAuthMenu } = useStateContext();

    let navigate = useNavigate()
    let localStorageCheker = localStorage.getItem('accoutName')

    useEffect(() => {

        if (localStorageCheker == null) {
            switchOffAuthMenu()
            navigate('/')
            console.log('inside cheker')
        }

    }, [])

    return (
        <div>Submit</div>
    )
}

export default Submit