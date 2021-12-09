import React, {useState, useEffect} from 'react';
import {Routes, Route, Link, useNavigate, Math} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './View/Home';
import MovieList from './component/Content/MovieListType';
import MovieResult from './View/MovieResult';
import DetailMovie from './View/DetailMovie';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detailmovie/:id" 
               element ={<DetailMovie/>}
        />
        <Route 
              path = '/result/:keyword' 
              element = {<MovieResult/>}
        />
        <Route path="/popular" element={<MovieList type={'popular'}/>}/>
        <Route path="/top_rated" element={<MovieList type={'top_rated'}/>}/>
        <Route path="/upcoming" element={<MovieList type={'upcoming'}/>}/>
      </Routes>
    </div>
  );
}

export default App;
