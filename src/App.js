import logoSymbol from './img/logo-symbol-color.png';
import logo from './img/logo-color.png';
import logoSymbolWhite from './img/logo-symbol-white.png';
import logoWhite from './img/logo-white.png';
import hambuger from './img/hambuger.png';

import './App.css';
import { Routes, Route, useNavigate, Outlet, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import convert from 'convert';


function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/main" element={<Main />}/>
      </Routes>
    </div>
  );
  function Index(){
    return(
      <div className='index'>
        <img src={logoSymbol} className="symbol-logo" alt="logo" />
        <img src={logo} className="text-logo" alt="logo" />
        <p className='intro'>
          Welcome to Convertrix, where you can easily convert various units of measurement quickly and accurately!
        </p>
        <button onClick={()=>{navigate("/main")}}>Go to convert</button>
      </div>
    )
  }
  function Main(){
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
            <li onClick={()=>{ setSelect(''); setSelect(0);}} className={select==0?'selected':''}>Length</li>
            <li onClick={()=>{ setSelect(''); setSelect(1);}} className={select==1?'selected':''}>Weight</li>
            <li onClick={()=>{ setSelect(''); setSelect(2);}} className={select==2?'selected':''}>Area</li>
            <li onClick={()=>{ setSelect(''); setSelect(3);}} className={select==3?'selected':''}>Volum</li>
          </ul>
        </header>
        {/* OUTLET */}
        <Length></Length>
        {/* OUTLET */}
      </div>
    )
  }
  function Length(){
    const [inputValue, setInputValue] = useState('');
    const [fromUnit, setFromUnit] = useState('');
    const [toUnit, setToUnit] = useState('');
    const [result, setResult] = useState(0);

    useEffect(()=>{
      if(inputValue && fromUnit && toUnit){
        let converted = convert(inputValue,fromUnit).to(toUnit)
        converted.toFixed(2);
        setResult(converted);
      } else {
        setResult(0);
      }
    })
    return(
      <div className='unitComponets length'>
      <div className='inputShow'>
        <div className='inputArea'>
          <input type="number" onChange={(e)=>{setInputValue(Number(e.target.value));}} value={inputValue}/>
          <select value={fromUnit} onChange={(e)=>{setFromUnit(e.target.value)}}>
            <option value="">Unit</option>
            <option value="miles">miles</option>
            <option value="in">in</option>
            <option value="km">km</option>
            <option value="m">m</option>
            <option value="cm">cm</option>
            <option value="yd">yd</option>
          </select>
        </div>
        <span className='eq'>=</span>
        <div className='result'>
          <input type="number" value={result}/>
          <select value={toUnit} onChange={(e)=>{setToUnit(e.target.value)}}>
            <option value="">Unit</option>
            <option value="miles">miles</option>
            <option value="in">in</option>
            <option value="km">km</option>
            <option value="m">m</option>
            <option value="cm">cm</option>
            <option value="yd">yd</option>
          </select>
        </div>
      </div>
      <ul className='otherUnits'>
        <li className='header'>Other units</li>
        <li><span>32</span><span className='units'>km</span></li>
        <li><span>32</span><span className='units'>mile</span></li>
        <li><span>32</span><span className='units'>mm</span></li>
        <li><span>32</span><span className='units'>cm</span></li>
      </ul>
    </div>
    )
  }
}
export default App;
