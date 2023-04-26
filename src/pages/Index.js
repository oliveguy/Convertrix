/*eslint-disable*/
import logoSymbol from '../img/logo-symbol-color.png';
import logo from '../img/logo-color.png';
import logoSymbolWhite from '../img/logo-symbol-white.png';
import logoWhite from '../img/logo-white.png';
import hambuger from '../img/hambuger.png';
import { Routes, Route, useNavigate, Outlet, Switch } from 'react-router-dom';

import '../App.css';

function Index(){
  let navigate = useNavigate();
  return(
    <div className='index'>
      <img src={logoSymbol} className="symbol-logo" alt="logo" />
      <img src={logo} className="text-logo" alt="logo" />
      <p className='intro'>
        Welcome to Convertrix, where you can easily convert various units of measurement quickly and accurately!
      </p>
      <button onClick={()=>{navigate("main/length")}}>Go to convert</button>
    </div>
  )
}

export default Index;