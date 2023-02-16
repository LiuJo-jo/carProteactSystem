// import logo from './logo.svg';
import './App.css';
import  React from "react";
import HeaderPge from './Page/index'
import  { BrowserRouter  }  from 'react-router-dom';
// import DefineRoutes from './router/DefineRoutes';
function App() {
  return (
    <BrowserRouter>
    <HeaderPge></HeaderPge>
    </BrowserRouter>
  );
}

export default App;
