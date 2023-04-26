/*eslint-disable*/
import '../App.css';
import { Routes, Route, useNavigate, Outlet, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import convert from 'convert';

function Volume(){
  var convert = require('convert-units');
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState(0);
  const [conversions, setConversions] = useState([
    {unitTo:"mm3", value:0},
    {unitTo:"cm3", value:0},
    {unitTo:"m3", value:0},
    {unitTo:"km3", value:0},
    {unitTo:"in3", value:0},
    {unitTo:"ft3", value:0},
    {unitTo:"ft3", value:0},
    {unitTo:"cup", value:0},
    {unitTo:"qt", value:0},
    {unitTo:"gal", value:0},
    {unitTo:"l", value:0},
    {unitTo:"yd3", value:0}
  ])
  useEffect(()=>{
    if(inputValue && fromUnit && toUnit){
      let converted = convert(inputValue).from(fromUnit).to(toUnit);
      // let converted = convert(inputValue,fromUnit).to(toUnit)
      let convertedFix = converted.toFixed(2);
      // Top Viewer
      setResult(convertedFix);
      // Other Units
      conversions.map((each)=>{
        let convertedShow = convert(inputValue).from(fromUnit).to(each.unitTo);
        // let convertedShow = convert(inputValue,fromUnit).to(each.unitTo);
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
          <option value="mm3">mm3</option>
          <option value="cm3">cm3</option>
          <option value="m3">m3</option>
          <option value="km3">km3</option>
          <option value="in3">in3</option>
          <option value="ft3">ft3</option>
          <option value="f3">f3</option>
          <option value="cup">cup</option>
          <option value="qt">qt</option>
          <option value="gal">gal</option>
          <option value="l">l</option>
          <option value="yd3">yd3</option>
        </select>
      </div>
      <span className='eq'>=</span>
      <div className='result'>
        <input type="number" value={result}/>
        <select value={toUnit} onChange={(e)=>{setToUnit(e.target.value)}}>
          <option value="">Unit</option>
          <option value="mm3">mm3</option>
          <option value="cm3">cm3</option>
          <option value="m3">m3</option>
          <option value="km3">km3</option>
          <option value="in3">in3</option>
          <option value="ft3">ft3</option>
          <option value="f3">f3</option>
          <option value="cup">cup</option>
          <option value="qt">qt</option>
          <option value="gal">gal</option>
          <option value="l">l</option>
          <option value="yd3">yd3</option>
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

export default Volume