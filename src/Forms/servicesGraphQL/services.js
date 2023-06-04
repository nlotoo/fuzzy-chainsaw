import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client'


const RequestsAuthModdal = (data) => {


  console.log(data)

    const LOGIN_IN_ACC = gql`
        query userLogin(email:String, password:String){
          user(id:$id){
            email,
            password,
      }
    }`

    const [loginData, {loading:loadingAccLogin, error:errorAccLogin, data: dataAccLogin}]=useLazyQuery(LOGIN_IN_ACC);

    console.log(loadingAccLogin)
    console.log(dataAccLogin)


};


export default RequestsAuthModdal;
