// import logo from './logo.svg';
import './App.css';
import  React from "react";

import  { BrowserRouter,Routes, Route  }  from 'react-router-dom';
import Login from './Page/Login';
import Home from './Page/index';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Login/>}></Route>
      <Route path = '/home' element={<Home/>}></Route>
      <Route path = '/*' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
