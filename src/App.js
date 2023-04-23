import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainMenu from './Menus/MainMenu/MainMenu.js'
import SecondMenu from './Menus/SecondMenu/SecondMenu';
import MainAuthForm from './Authorization/MainAuthForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainMenu></MainMenu>

        <SecondMenu></SecondMenu>


        <Routes>
          <Route path="/home" element='' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
