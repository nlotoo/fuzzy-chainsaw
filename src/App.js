
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import MainMenu from './Menus/MainMenu/MainMenu.js'
import SecondMenu from './Menus/SecondMenu/SecondMenu';
import Submit from './Components/Submit/Submit'
import GraphQL from './Components/GraphQl/GraphQL';


import { useStateContext } from './context/StateContext';
import useScreenSize from './Hooks/useScreenSize';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'




function App() {
  let { AuthMenuState } = useStateContext();
  let screenSize = useScreenSize();





  // Email/Password Authentication
  const email = 'nlotoo93';
  const password = 'asdasd';





  const httpLink = createHttpLink({
    uri: 'https://realm.mongodb.com/api/client/v2.0/app/test-graphql-react-oyfpv/graphql', // Replace with your MongoDB Realm GraphQL API URL
    // uri: 'https://eu-west-2.aws.data.mongodb.com/api/client/v2.0/app/data-sqpuv/graphql',
    headers: {
      email: `${email}`, // Replace with your email address
      password: `${password}`, // Replace with your password
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin,': '*',
    },
  });




  const client = new ApolloClient({
    uri: 'http://localhost:5001/graphql',
    // link: httpLink,
    cache: new InMemoryCache(),
    // uri: 'https://eu-west-2.aws.realm.mongodb.com/api/client/v2.0/app/data-sqpuv/graphql'

  });


  return (
    <ApolloProvider client={client}>

      <div className={AuthMenuState ? 'trasnp-bg' : undefined}
      >
        <BrowserRouter>
          <MainMenu></MainMenu>
          <SecondMenu></SecondMenu>
          <div>asdds</div>
          <Routes>
            <Route path="/" element={<div> width: {screenSize.width}- - height: {screenSize.height}</div>} />
            <Route path='/submit' element={<Submit />}></Route>
            <Route path='/test' element={<GraphQL />}></Route>
          </Routes>
        </BrowserRouter>
      </div >
    </ApolloProvider>

  );
}

export default App;
