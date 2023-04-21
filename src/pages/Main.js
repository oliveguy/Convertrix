import logoSymbolWhite from '../img/logo-symbol-white.png';
import logoWhite from '../img/logo-white.png';
import hambuger from '../img/hambuger.png';

import '../App.css';
import { Routes, Route, useNavigate, Outlet, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import convert from 'convert';

function Main(){
  let navigate = useNavigate();
  const [select, setSelect] = useState('');
  return(
    <div className='main'>
      <header>
        <div className='topHeader'>
          <div className='logoSet' onClick={()=>{navigate("/")}}>
            <img src={logoSymbolWhite} alt="logo-symbol" className='main-symbol' />
            <img src={logoWhite} alt="logo-text" className='main-text'/>
          </div>
          <img src={hambuger} alt="hambugerMenu" className='hambuger'/>
        </div>
        <ul className='category'>
          <li onClick={()=>{ navigate("/main/length"); setSelect(''); setSelect(0); }} className={select==0?'selected':''}>Length</li>
          <li onClick={()=>{ navigate("/main/mass"); setSelect(''); setSelect(1); }} className={select==1?'selected':''}>Mass</li>
          <li onClick={()=>{ navigate("/main/area"); setSelect(''); setSelect(2); }} className={select==2?'selected':''}>Area</li>
          <li onClick={()=>{ navigate("/main/volume"); setSelect(''); setSelect(3); }} className={select==3?'selected':''}>Volume</li>
        </ul>
      </header>
      <Outlet></Outlet>
    </div>
  )
}

export default Main;