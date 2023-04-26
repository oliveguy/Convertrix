/*eslint-disable*/
import logoSymbol from './img/logo-symbol-color.png';
import logo from './img/logo-color.png';
import logoSymbolWhite from './img/logo-symbol-white.png';
import logoWhite from './img/logo-white.png';
import hambuger from './img/hambuger.png';

import './App.css';
import { Routes, Route, useNavigate, Outlet, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import convert from 'convert';
import Index from './pages/Index.js';
import Main from './pages/Main.js';
import Length from './pages/Length.js';
import Mass from './pages/Mass.js';
import Area from './pages/Area.js';
import Volume from './pages/Volume.js';
import Info from './pages/Info.js';

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/main" element={<Main />}>
          <Route path="length" element={<Length />}/>
          <Route path="mass" element={<Mass />}/>
          <Route path="area" element={<Area />}/>
          <Route path="volume" element={<Volume />}/>
          <Route path="info" element={<Info />}/>
        </Route>
      </Routes>
    </div>
  );
}
export default App;

// https://github.com/nosferatoy/units-converter#readme
// Permision Denied Issue(MAC) Node module authrized
// sudo chmod +x node_modules/.bin/react-scripts
// Absolute Path Setting -> process.env.PUBLIC_URL
