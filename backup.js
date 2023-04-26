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
      setResult('');
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
        conversions.map((item, index)=>{
          return (<li key={index}><span><b>{item.value}</b></span><span className='units'>{item.unitTo}</span></li>)
        })
      }
    </ul>
  </div>
  )
}
function Area(){
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
          <option value="mm2">mm2</option>
          <option value="mcm2">cm2</option>
          <option value="km2">m2</option>
          <option value="lkm2">km2</option>
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
function Volume(){
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
    {unitTo:"mi3", value:0},
    {unitTo:"f3", value:0},
    {unitTo:"cup", value:0},
    {unitTo:"qt", value:0},
    {unitTo:"gal", value:0},
    {unitTo:"yd3", value:0}
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
          <option value="mm3">mm3</option>
          <option value="cm3">cm3</option>
          <option value="m3">m3</option>
          <option value="km3">km3</option>
          <option value="in3">in3</option>
          <option value="ft3">ft3</option>
          <option value="mi3">mi3</option>
          <option value="f3">f3</option>
          <option value="cup">cup</option>
          <option value="qt">qt</option>
          <option value="gal">gal</option>
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
          <option value="mi3">mi3</option>
          <option value="f3">f3</option>
          <option value="cup">cup</option>
          <option value="qt">qt</option>
          <option value="gal">gal</option>
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