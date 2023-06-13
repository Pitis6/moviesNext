import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardMovie = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.id}`} className="p-[10px] w20">
      <Image
        key={movie.id}
        src={movie?.frontImage}
        width={300}
        height={300}
        alt={movie.name}
        className="w-auto h-auto"
      />
    </Link>
  );
};

export default CardMovie;
