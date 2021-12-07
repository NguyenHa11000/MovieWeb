import React, {useState, useEffect} from 'react';
import {Routes, Route, Link, useNavigate, Math} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './View/Home';
import Member from './View/member';
import MovieResult from './View/MovieResult';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/member" element ={<Member/>}/> */}
        <Route 
              path = '/result/:keyword' 
              element = {<MovieResult/>}
        />
        {/* <Route path="/Type" element={<Type/>}/>
        <Route path="/favouriteMovie" element={<favouriteMovie/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
