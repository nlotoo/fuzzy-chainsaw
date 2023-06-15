
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import MainMenu from './Menus/MainMenu/MainMenu.js'
import SecondMenu from './Menus/SecondMenu/SecondMenu';
import Submit from './Components/Submit/Submit'
import GraphQL from './Components/GraphQl/GraphQL';


import { useStateContext } from './context/StateContext';
import useScreenSize from './Hooks/useScreenSize';


function App() {
  let { AuthMenuState } = useStateContext();
  let screenSize = useScreenSize();

  return (


    <div className={AuthMenuState ? 'trasnp-bg' : undefined}
    >
      <BrowserRouter>
        <MainMenu></MainMenu>
        <SecondMenu></SecondMenu>
        <div>{() => {

          //  to create user sesion for fron-end

          console.log(localStorage.getItem('userToken'))
        }}</div>
        <Routes>
          <Route path="/" element={<div> width: {screenSize.width}- - height: {screenSize.height}</div>} />
          <Route path='/submit' element={<Submit />}></Route>
          <Route path='/test' element={<GraphQL />}></Route>
        </Routes>
      </BrowserRouter>
    </div >

  );
}

export default App;
