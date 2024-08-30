import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id}=useParams();
  const navigate=useNavigate();

  const [apiData,setApiData]=useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzFkZjI5OGM2NTEzNDNkMTQ5ZGFiY2ZjNjQxNTM5ZSIsIm5iZiI6MTcyNDIyODIyNy41NDUwNTMsInN1YiI6IjY2YzVhMGI4MjJjYjc5YTBlNzI1MDA1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJLX_nh2ckRpmB94Z5olvZYvk1dVfbybMpyFQG1hBi8'
    }
  };
  
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
},[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder='0' allowFullScreen></iframe>
       <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player
