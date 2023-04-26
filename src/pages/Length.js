/*eslint-disable*/
import '../App.css';
import { Routes, Route, useNavigate, Outlet, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import convert from 'convert';

function Length(){
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState(0);
  const [conversions, setConversions] = useState([
    {unitTo:"mile", value:0},
    {unitTo:"in", value:0},
    {unitTo:"km", value:0},
    {unitTo:"m", value:0},
    {unitTo:"cm", value:0},
    {unitTo:"yd", value:0}
  ])
  useEffect(()=>{
    if(inputValue && fromUnit && toUnit){
      let converted = convert(inputValue,fromUnit).to(toUnit)
      let convertedFix = converted.toFixed(2);
      // Top Viewer
      setResult(convertedFix);
      // Other Units
      conversions.map((each)=>{
        let convertedShow = convert(inputValue,fromUnit).to(each.unitTo);
        let fixed = convertedShow.toFixed(2)
        each.value = fixed;
      })
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
          <option value="mile">mile</option>
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
      { 
        conversions.map((item, index)=>{
          return (<li key={index}><span><b>{item.value}</b></span><span className='units'>{item.unitTo}</span></li>)
        })
      }
    </ul>
  </div>
  )
}

export default Length