import React, { useState, useRef,useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from "react-router";
import './Carousel.css' ;
const SimpleSlider = props => {
  const sliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
  }
  const [_items, setMovies] = useState([]);
    
    const getMoviesRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&page=1`
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results.slice(0,7));
    }
    
    useEffect ( () => {
        getMoviesRequest()
    }, [])
    console.log(_items)
    let navigate = useNavigate();
  return (
    <div className='content test'>
      <Slider {...sliderSettings}>
        {_items.map((card, index) => (
          <div className="container d-lex justify-content-start test" >
                <img src={"https://image.tmdb.org/t/p/w500".concat(_items[index].poster_path)} 
                    className='imagee'
                    style={{ padding: "4px", backgroundColor: "rgb(32, 32, 31)"}}
                    onClick={() => navigate(`/detailmovie/${_items[index].id}`)}
                    >
                </img>
                <div className='overlayy'>
                    {_items[index].original_title}
                </div>
            </div>
        ))}
      </Slider>
    </div>
  )
};
          
export default SimpleSlider;
