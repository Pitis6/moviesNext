
const getMovie = async(id)=>{
    const res = await fetch(`http:/localhost:3000/api/movies/${id}`)
    const movie = await res.json()
    return movie
}


const MovieDetail = async ({params}) => {
    const movie = await getMovie ( params.id)
  return (
    <div>{movie.name}</div>
  )
}

export default MovieDetail