import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Component/style.css'
import Loginheader from './Component/Loginheader';
import Home from './Component/Home';
import './Component/mobile.css'
import YourScore from './Component/YourScore';
import Login from './Component/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <Loginheader></Loginheader>
    <Home></Home>
    {/* <Login></Login> */}
    {/* <YourScore></YourScore> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
