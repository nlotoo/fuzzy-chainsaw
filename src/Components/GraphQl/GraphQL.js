import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { useQuery, useLazyQuery } from '@apollo/client';

const GraphQL = () => {



  const GET_BOOKS_QUERY = gql`
  query {
    books {
      author
      title
    }
  }
`;


  const GET_MAGAZINES_QUERY = gql`
  query  {
  magazines {
    author
    country
    id
    title
    year
  }
}
`;


  const GET_BUYERS_QUERY = gql`
query Buyers {
  buyers {
    year
    name
    gender
    collection {
      author
      country
      id
      title
      year
    }
  }
}`;


  const GET_MAGAZINE_BY_ID = gql`

  query Magaz($id:ID){
     magaz(id:$id){
       id
       title
       author
       country
    }
  }
`;

  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
  const { loading: magazinesLoading, error: magazinesError, data: magazinesData } = useQuery(GET_MAGAZINES_QUERY);
  const { loading: buyersLoading, error: buyersError, data: buyersData } = useQuery(GET_BUYERS_QUERY);


  const [concreteMagazine, { data: concreteMagazineData, error: concreteMagazineError }] = useLazyQuery(GET_MAGAZINE_BY_ID);

  // console.log(buyersData)


  const [inputValue, setInputValue] = React.useState("");

  function OnchangesettingData(e) {
    setInputValue(e.target.value);
  }



  // create book states and .. 


  const [author, setAuthor] = useState()
  const [title, setTitle] = useState()


  const CREATE_NEW_BOOK = gql`
  mutation createBook($input: CreateBookInput) {
    createBook(input:$input){
      author
      title
    }
  }
  `

  const [createNewBook,] = useMutation(CREATE_NEW_BOOK)


  // end create magazin states

  return (
    <div style={{ display: 'flex' }}>

      <div >
        <h3>Books</h3>
        {loading && <div>LOADING...</div>}

        {data?.books && data?.books.map((book, index) => {
          return <ul key={index}>
            <li>title: {book.title}</li>
            <li>author: {book.author}</li>
          </ul>
        })}
      </div>

      <div>
        <h3>Magazines</h3>
        {magazinesData?.magazines && magazinesData?.magazines.map((magazines, index) => {
          // console.log(magazines)
          return <ul key={index}>
            <li>id: {magazines.id}</li>
            <li>title: {magazines.title}</li>
            <li>author: {magazines.author}</li>
            <li>age: {magazines.year}</li>
            <li>contrty: {magazines.country}</li>
          </ul>
        })}
      </div>
      <div>
        <h3>Buyers</h3>
        <div>
          {
            buyersData?.buyers &&
            buyersData?.buyers.map((buyer, index) => {
              return <ul key={index}>
                <li>year: {buyer.year}</li>
                <li>name {buyer.name}</li>
                <li>gender: {buyer.gender}</li>
                <li>buyer collection:
                  {buyer?.collection.map((x) => {
                    return <ul>
                      <li>id: {x.id}</li>
                      <li>title: {x.title}</li>
                      <li>author: {x.author}</li>
                      <li>age: {x.year}</li>
                      <li>contrty: {x.country}</li>
                    </ul>

                  })
                  }
                </li>

              </ul>
            })

          }
        </div>
      </div>

      <div>

        <input
          type='text'
          placeholder='add...'
          onChange={OnchangesettingData}
        />
        <button onClick={
          () => concreteMagazine({ variables: { id: inputValue } })
        }>Fetch data</button>
        <div>

          <div>
            {
              concreteMagazineData?.magaz ? <div>
                <ul>
                  <li>id: {concreteMagazineData?.magaz.id}</li>
                  <li>author: {concreteMagazineData?.magaz.author}</li>
                  <li>title: {concreteMagazineData?.magaz.title}</li>
                  <li>country: {concreteMagazineData?.magaz.country}</li>

                </ul>
              </div> : <div>
                No data fetch
              </div>
            }
          </div>
        </div>
      </div>


      <div style={{ marginLeft: '20px', }}>
        <input onChange={setTitle} placeholder='title' type='text' name='title'></input>
        <input onChange={setAuthor} placeholder='author' type='text' name='author'></input>
        <button onClick={() => { createNewBook({ variables: { input: author, title } }) }}>Create book</button>
      </div>

    </div >
  )
}

export default GraphQL