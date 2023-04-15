import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainMenu from './Menus/MainMenu/MainMenu.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainMenu></MainMenu>
        <Routes>
          <Route path="/home" element='' />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
