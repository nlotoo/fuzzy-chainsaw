
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import MainMenu from './Menus/MainMenu/MainMenu.js'
import SecondMenu from './Menus/SecondMenu/SecondMenu';
import Submit from './Components/Submit/Submit'
import GraphQL from './Components/GraphQl/GraphQL';


import { useStateContext } from './context/StateContext';
import useScreenSize from './Hooks/useScreenSize';
import { useEffect } from 'react';
import useUserToken from './Hooks/useUserToken';
import AllPost from './Components/AllPost/AllPost';
import Footer from './Components/Footer/Footer';
import CreateRecord from './Components/CreateRecord/CreateRecord';
import GetDealPage from './Components/GetDeal/GetDealPage';

function App() {
  let { AuthMenuState } = useStateContext();
  let screenSize = useScreenSize();
  let userToken = useUserToken();


  return (


    <div className={AuthMenuState ? 'trasnp-bg' : undefined}
    >
      <BrowserRouter>
        <MainMenu></MainMenu>
        <SecondMenu></SecondMenu>
        {/* <div>userToken: {userToken}</div> */}
        <Routes>
          <Route path="/" element={<div> width: {screenSize.width} - - height: {screenSize.height}</div>} />
          <Route path='/submit' element={<Submit />}></Route>
          <Route path='/test' element={<GraphQL />}></Route>
          <Route path='/all' element={<AllPost />}></Route>
          <Route path='/create' element={<CreateRecord />}></Route>
          <Route path='/deal/:id' element={<GetDealPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div >

  );
}

export default App;
