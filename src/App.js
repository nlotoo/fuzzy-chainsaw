
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import MainMenu from './Menus/MainMenu/MainMenu.js'
import SecondMenu from './Menus/SecondMenu/SecondMenu';
import Submit from './Components/Submit/Submit'
import GraphQL from './Components/GraphQl/GraphQL';


import { useStateContext } from './context/StateContext';
import useScreenSize from './Hooks/useScreenSize';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'



function App() {
  let { AuthMenuState } = useStateContext();
  let screenSize = useScreenSize();

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
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
