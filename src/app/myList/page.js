"use client"

import { useSelector } from "react-redux";

const MyList = () => {
  const {myList} = useSelector((store) => store.favSlice)
  return <div>{myList.map(movie => <h1 key={movie.id}>{movie.name}</h1>)}</div>;
};
export default MyList;
