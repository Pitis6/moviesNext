"use client"
import React, { useEffect, useState } from 'react'

const SearchPage = () => {

    const [movies, setMovies ] = useState([])
    useEffect(()=>{
        const getData = async () => {
            const res = await fetch()
            const data = await res.json()
            setMovies(movies)
        }
            getData();

    },[])
    console.log(movies);
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage