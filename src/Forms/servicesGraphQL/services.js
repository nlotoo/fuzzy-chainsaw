import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client'
import { useStateContext } from '../../context/StateContext';


const useRequestsAuthModdal = (data) => {

//  to transfer login details by context to useRequestAuthModdal

  let { LoginDataUser } = useStateContext();

  console.log(data)

  const LOGIN_IN_ACC = gql`
        query userLogin(email:String, password:String){
          user(email:$email,password:$password){
            email,
            password,
      }
    }`

  const [loginData, { loading: loadingAccLogin, error: errorAccLogin, data: dataAccLogin }] = useLazyQuery(LOGIN_IN_ACC);

  console.log(loadingAccLogin)
  console.log(dataAccLogin)


};


export default useRequestsAuthModdal;
