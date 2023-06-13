"use client"
import CardMovie from '@/components/common/cardMovie/CardMovie'
import React, { useEffect, useState } from 'react'

const SearchPage = () => {

    const [movies, setMovies ] = useState([])
    const [name, setName ] = useState('')

    let moviesFiltered = movies.filter(
  (movie) =>
    movie.category.toLowerCase().includes(name.toLowerCase()) ||
    movie.name.toLowerCase().includes(name.toLowerCase()) ||
    movie.cast.some((cast) => cast.toLowerCase().includes(name.toLowerCase())) ||
    movie.gender.some((gender) => gender.toLowerCase().includes(name.toLowerCase()))
);
    useEffect(()=>{
        const getData = async () => {
            const res = await fetch("http://localhost:3000/api/movies");
            const data = await res.json()
            setMovies(data)
        }
            getData();

    },[])
    
  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-ghost w-full max-w-lg"
        onChange={(e)=> setName(e.target.value)}
      />
      {!name
        ? movies.map((movie) => <CardMovie key={movie.name} movie={movie}/>)
        : moviesFiltered.map((movie) => <CardMovie key={movie.name} movie={movie}/>)}
    </div>
  );
}

export default SearchPage