import React from 'react'

import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const GraphQL = () => {

    const GET_USERS_QUERY = gql`
  query {
    users {
      id
      name
    }
  }
`;

    const { loading, error, data } = useQuery(GET_USERS_QUERY);
    console.log(data)



    return (
        <div>GraphQL
            <select name="something" id="test">
                <option value="volvo">Volvo</option>
            </select>

            <div>
                <p>NEW REQUEST</p>

            </div>
        </div>
    )
}

export default GraphQL