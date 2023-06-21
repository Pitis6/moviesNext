import MovieDetail from "@/components/page/movieDetail/MovieDetail"

const getMovie = async(id)=>{
    const res = await fetch(`http:/localhost:3000/api/movies/${id}`)
    const movie = await res.json()
    return movie
}


const MovieDetailServer = async ({params}) => {
    const movie = await getMovie ( params.id)

  return (
    <>
      <MovieDetail movie={movie}/>
    </>
  );
}

export default MovieDetailServer