import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client'


const RequestsAuthModdal = () => {

    const LOGIN_IN_ACC = gql`
        query user($id:ID){
          user(id:$id){
            email,
            password,
      }
    }`

    const [LOGINDATA, {loading:loadingAccLogin, error:errorAccLogin, data: dataAccLogin}]=useLazyQuery(LOGIN_IN_ACC)


};


export default RequestsAuthModdal;
