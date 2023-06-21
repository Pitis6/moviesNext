"use client";

import { handleFav } from "@/store/favSlice";
import { useDispatch, useSelector } from "react-redux";

const MovieDetail = ({ movie }) => {
  const dispach = useDispatch();
  const { myList } = useSelector((store) => store.favSlice);
  const exist = myList.some((item)=> item.id === movie.id)
  return (
    <div>
      <h2>{movie.name}</h2>
      <button onClick={() => dispach(handleFav(movie))}>{exist ? 'quitar':'agregar'}</button>
    </div>
  );
};

export default MovieDetail;
