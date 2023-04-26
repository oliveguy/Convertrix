/*eslint-disable*/
import '../App.css';
import { Routes, Route, useNavigate, Outlet, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logoSymbol from '../img/logo-symbol-color.png';
import logo from '../img/logo-color.png';

function Info (){
  return(
    <div className='unitComponets info'>
      <div className='infoSection'>
        <img src={logoSymbol} className="symbol-logo" alt="logo" />
        <img src={logo} className="text-logo" alt="logo" />
        <div>
          <p>Convertrix is designed to simplify the process of converting between different units of measurement. Whether you need to convert units for length, mass, area, and volume, Convertrix has got you covered. With just a few clicks or taps, you can convert between different units, such as meters to feet, grams to ounces, liters to gallons, and much more.</p>

          <p>Convertrix is user-friendly and intuitive, making it easy for anyone to use. It features a simple and straightforward interface that displays all the conversion options in an organized manner. You can choose from a wide range of units, and we provide accurate and reliable results every time.</p>
        </div>
      </div>
    </div>
  )
}

export default Info