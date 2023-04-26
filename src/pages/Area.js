/*eslint-disable*/
import '../App.css';
import { Routes, Route, useNavigate, Outlet, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import convert from 'convert';

function Area(){
  var convert = require('convert-units');
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState(0);
  const [conversions, setConversions] = useState([
    {unitTo:"mm2", value:0},
    {unitTo:"cm2", value:0},
    {unitTo:"m2", value:0},
    {unitTo:"km2", value:0},
    {unitTo:"in2", value:0},
    {unitTo:"ft2", value:0},
    {unitTo:"mi2", value:0},
    {unitTo:"ac", value:0},
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
          <option value="mm2">mm2</option>
          <option value="mcm2">cm2</option>
          <option value="km2">m2</option>
          <option value="km2">km2</option>
          <option value="oin2">in2</option>
          <option value="ft2">ft2</option>
          <option value="mi2">mi2</option>
          <option value="ac">ac</option>
        </select>
      </div>
      <span className='eq'>=</span>
      <div className='result'>
        <input type="number" value={result}/>
        <select value={toUnit} onChange={(e)=>{setToUnit(e.target.value)}}>
          <option value="">Unit</option>
          <option value="mm2">mm2</option>
          <option value="cm2">cm2</option>
          <option value="m2">m2</option>
          <option value="km2">km2</option>
          <option value="in2">in2</option>
          <option value="ft2">ft2</option>
          <option value="mi2">mi2</option>
          <option value="ac">ac</option>
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

export default Area