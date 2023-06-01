

import Image from "next/image";
import Link from "next/link";

const Movies = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <Link key={movie.id} href={`movies/${movie.id}`}>
        <div>
          {/* <Image src={e.frontImage} width={200} height={200} alt="asd" style={{height: "auto"}} /> */}
          <img src={movie.frontImage} alt="asd" />
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Movies;