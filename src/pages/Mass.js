
import '../App.css';
import { Routes, Route, useNavigate, Outlet, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import convert from 'convert';

function Mass(){
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState(0);
  const [conversions, setConversions] = useState([
    {unitTo:"g", value:0},
    {unitTo:"mg", value:0},
    {unitTo:"kg", value:0},
    {unitTo:"lb", value:0},
    {unitTo:"oz", value:0},
    {unitTo:"mt", value:0},
    {unitTo:"t", value:0}
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
        <option value="g">g</option>
        <option value="mg">mg</option>
        <option value="kg">kg</option>
        <option value="lb">lb</option>
        <option value="oz">oz</option>
        <option value="mt">mt</option>
        <option value="t">t</option>
        </select>
      </div>
      <span className='eq'>=</span>
      <div className='result'>
        <input type="number" value={result}/>
        <select value={toUnit} onChange={(e)=>{setToUnit(e.target.value)}}>
          <option value="">Unit</option>
          <option value="g">g</option>
          <option value="mg">mg</option>
          <option value="kg">kg</option>
          <option value="lb">lb</option>
          <option value="oz">oz</option>
          <option value="mt">mt</option>
          <option value="t">t</option>
        </select>
      </div>
    </div>
    <ul className='otherUnits'>
      <li className='header'>Other units</li>
      { 
        conversions.map((item)=>{
          return (<li><span><b>{item.value}</b></span><span className='units'>{item.unitTo}</span></li>)
        })
      }
    </ul>
  </div>
  )
}

export default Mass