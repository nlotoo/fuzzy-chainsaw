
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainMenu from './Menus/MainMenu/MainMenu.js'
import SecondMenu from './Menus/SecondMenu/SecondMenu';

import { StateContext } from './context/StateContext';
import { useStateContext } from './context/StateContext';
import { useEffect } from 'react';


function App() {
  let { AuthMenuState,switchOffAuthMenu } = useStateContext();

  return (

    <div className={AuthMenuState && 'trasnp-bg'} 
    // onClick={AuthMenuState ? switchOffAuthMenu : null}
    >
      <BrowserRouter>
        <MainMenu></MainMenu>
        <SecondMenu></SecondMenu>
        <div>asdds</div>
        <Routes>
          <Route path="/" element={<div style={{ height: '600px' }}>asdds</div>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
