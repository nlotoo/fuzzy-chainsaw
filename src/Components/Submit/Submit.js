import React from 'react'

import SubmitAuthHoc from '../../HOCs/SubmitAuthHOC'

const Submit = () => {

    // let localStorageCheker = localStorage.getItem('accoutName')
    // let navigate = useNavigate()

    // console.log(localStorageCheker)

    // if(localStorageCheker == null){
    //     navigate('/')
    // }

    return (
        <div>Submit</div>
    )
}

export default SubmitAuthHoc(Submit)