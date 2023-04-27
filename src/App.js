
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainMenu from './Menus/MainMenu/MainMenu.js'
import SecondMenu from './Menus/SecondMenu/SecondMenu';
import Submit from './Components/Submit/Submit'


import { useStateContext } from './context/StateContext';

function App() {
  let { AuthMenuState,switchOffAuthMenu } = useStateContext();

  return (

    <div className={AuthMenuState ? 'trasnp-bg': undefined} 
    // onClick={AuthMenuState ? switchOffAuthMenu : null}
    >
      <BrowserRouter>
        <MainMenu></MainMenu>
        <SecondMenu></SecondMenu>
        <div>asdds</div>
        <Routes>
          <Route path="/" element={<div style={{ height: '600px' }}>asdds</div>} />
          <Route path='/submit' element={<Submit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
