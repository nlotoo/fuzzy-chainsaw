import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { useQuery, useLazyQuery } from '@apollo/client';

const GraphQL = () => {





  const UPLOAD_FILE = gql`
    mutation SingleUpload($file: Upload) {
        singleUpload(file: $file) {
          lastModified
    name
    size
    type
    webkitRelativePath
         }
        }
  `
  const [uploadFile, { data: dataUpload, error: dataError }] = useMutation(UPLOAD_FILE);

  // const uploadFile = async (file) => {
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   console.log(formData.get('file'))

  //   // const response = await client.mutate({
  //   //   mutation: UPLOAD_FILE,
  //   //   variables: { file: formData },
  //   // });

  //   // console.log(response);
  // };



  const handleFileChange = e => {

    console.log(e.target.files[0])
    let file = e.target.files[0]



      //  uploadFile(formData)

      // console.log(e.target.files[0])

      // if (!file) return
       uploadFile({ variables: file })

  }



  let userID = '6467da551a908d95d1490798'


  const FETCH_POST = gql`

        query GetPosts {
          getPosts {
            id
            owner
            description
            user
            createAt
         
          }
        }
  `

  const { loading: getLoadingPost, data: getDataPost } = useQuery(FETCH_POST)

  console.log(getDataPost)





  const GET_ACCOUNTA_MONGO = gql`
  query user($id:ID){
    user(id:$id) {
      email,
      password,
    }
  }
  `

  const [hastag, { loading: accLoading, error: errorLoadingAcc, data: accData, }] = useLazyQuery(GET_ACCOUNTA_MONGO)
  // const [concreteMagazine, { data: concreteMagazineData, error: concreteMagazineError }] = useLazyQuery(GET_MAGAZINE_BY_ID);



  // get user account from mongo

  const GET_ACCOUNT_MONGO = gql`
  query {
  account {
    _id
    account_id
    limit
    products
  }
}
  `

  const { loading: AcountsMongoLoading, error: AcountsMongoError, data: AcountsMongoData, } = useQuery(GET_ACCOUNT_MONGO);
  //get all books query logic 


  const GET_BOOKS_QUERY = gql`
  query {
    books {
      author
      title
    }
  }
`;

  //get all books query logic 
  const { loading, error, data, refetch } = useQuery(GET_BOOKS_QUERY);


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

  const { loading: magazinesLoading, error: magazinesError, data: magazinesData } = useQuery(GET_MAGAZINES_QUERY);
  const { loading: buyersLoading, error: buyersError, data: buyersData } = useQuery(GET_BUYERS_QUERY);


  const [concreteMagazine, { data: concreteMagazineData, error: concreteMagazineError }] = useLazyQuery(GET_MAGAZINE_BY_ID);

  // console.log(buyersData)


  const [inputValue, setInputValue] = React.useState("");

  function OnchangesettingData(e) {
    setInputValue(e.target.value);
  }



  // create book states and .. 


  // trqbwa da proverq dali raboti

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

  const [createBook] = useMutation(CREATE_NEW_BOOK)


  // end create magazin states




  return (



    <div style={{ display: 'flex' }}>
      <div>
        <h1>Upload file</h1>
        <input id='file-input' name='file' type='file' onChange={handleFileChange}></input>
      </div>



      <div>
        <h1>getPosts</h1>
        <div>

        </div>
      </div>



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
        <button onClick={() => {
          createBook({ variables: { input: { author: author.target.value, title: title.target.value, } } })
          refetch()

        }}>Create book</button>
      </div>


      <div>
        <p>graphql to mongo</p>
        {AcountsMongoLoading && <div>LOADING....</div>}


        {/* {console.log(AcountsMongoError)} */}

        <div>
          {/* {console.log(AcountsMongoData)} */}
        </div>
      </div>


      <div>
        <p> New  request</p>
        <button onClick={
          () => hastag({ variables: { id: userID } })
        }
        >User</button>

        <p>
          in {accLoading && <div>LOADING Eee....</div>}
          {console.log(accData?.user)}

          {/* {console.log(accData)} */}

          <div>
            <label>acc</label><br></br>
            {accData?.user?.email}
          </div>
          <div>
            <label>pass</label><br></br>

            {accData?.user?.password}
          </div>
        </p>
      </div>
    </div >
  )
}

export default GraphQL
