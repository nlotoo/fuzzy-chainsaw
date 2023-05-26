import React, { useState } from 'react'
import { gql } from '@apollo/client';
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


  const GET_MAGAZINE_BY_NAME = gql`

  query Magaz($title:String){
    query magaz(title:$title){
    title
    }
  }
`;

  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
  const { loading: magazinesLoading, error: magazinesError, data: magazinesData } = useQuery(GET_MAGAZINES_QUERY);
  const { loading: buyersLoading, error: buyersError, data: buyersData } = useQuery(GET_BUYERS_QUERY);


  let { magazineSearched, setMagazinSearched } = useState('')
  const [concreteMagazine, { data: concreteMagazineData, error: concreteMagazineError }] = useLazyQuery(GET_MAGAZINE_BY_NAME)

  // console.log(buyersData)


  const OnchangesettingData = (e) => {
    console.log(e.target.value)
    // console.log(e.traget.value)
    setMagazinSearched(e.target.value)
  }



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
                    { console.log(x) }
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
        {magazineSearched}
        <input type='text' placeholder='add..' onChange={OnchangesettingData} />
        <button onClick={
          () => concreteMagazine({ variables: { title: magazineSearched } })
        }>Fetch data</button>
      </div>


    </div >
  )
}

export default GraphQL