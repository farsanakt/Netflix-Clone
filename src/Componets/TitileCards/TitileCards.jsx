import React, { useEffect, useRef, useState } from 'react'
import './TitileCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitileCards = ({title,category}) => {

  const [apiData,setApiData]=useState([]); // bcz we can getting the data from the api is formm of array 
  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzFkZjI5OGM2NTEzNDNkMTQ5ZGFiY2ZjNjQxNTM5ZSIsIm5iZiI6MTcyNDIyODIyNy41NDUwNTMsInN1YiI6IjY2YzVhMGI4MjJjYjc5YTBlNzI1MDA1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJLX_nh2ckRpmB94Z5olvZYvk1dVfbybMpyFQG1hBi8'
    }
  };
  
  const handleWheel=(event)=>{
   event.preventDefault()
   cardsRef.current.scrollLeft+=event.deltaY; 
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

      cardsRef.current.addEventListener('wheel',handleWheel)
  },[])

  return (
    <div className='title-cards'>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card,index)=>{
         return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
         </Link>
        })}
      </div>
    </div>
  )
}

export default TitileCards
