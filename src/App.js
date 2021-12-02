import React, {useState, useEffect} from 'react';
import {Routes, Route, Link, match} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './View/Home';
import Member from './View/member';
import MovieResults from './View/MovieResults'
import MovieResult from './View/MovieResults';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/member" element ={<Member/>}/>
        <Route 
              path = '/result' 
              element = {<MovieResult/>}
        />
        {/* <Route path="/Type" element={<Type/>}/>
        <Route path="/favouriteMovie" element={<favouriteMovie/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
