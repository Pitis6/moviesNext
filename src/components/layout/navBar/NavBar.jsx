import Image from "next/image";
import Link from "next/link";

const NavBar = ({ isActive }) => {
  return (
    <header
      className={`${
        isActive ? "bg-nav" : "bg-transparent"
      } transition 0.2s ease-in-out w-full h-70 px-9 flex justify-between items-centerm sticky top-0`}
    >
      <div className="w-4/5 flex">
        <ul className="flex w-800 items-center justify-between">
          <Link href={"/"} className="w-20">
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685474334/disney-app/common/logo.1a56f51c764022ee769c91d894d44326_d0ssm3.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </Link>
          <Link
            href={"/"}
            className="uppercase text-white text-sm font-semibold flex items-center"
          >
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685496959/disney-app/icons/home-svgrepo-com_ia70m1.svg"
              alt="home"
              width={20}
              height={20}
              className="w-4 h-4 m-2"
            />
            inicio
          </Link>
          <Link
            href="/search"
            className="uppercase text-white text-sm font-semibold flex items-center"
          >
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685498593/disney-app/icons/search-svgrepo-com_lekw8x.svg"
              alt="search"
              width={20}
              height={20}
              className="w-4 h-4 m-2"
            />
            busqueda
          </Link>
          <Link
            href={"/"}
            className="uppercase text-white text-sm font-semibold flex items-center"
          >
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685498798/disney-app/icons/plus-svgrepo-com_r0n1jz.svg"
              alt="myList"
              width={20}
              height={20}
              className="w-4 h-4 m-2"
            />
            mi lista
          </Link>
          <Link
            href={"/"}
            className="uppercase text-white text-sm font-semibold flex items-center"
          >
            {" "}
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685499476/disney-app/icons/cinema-film-movie-svgrepo-com_yusxjt.svg"
              alt="movies"
              width={20}
              height={20}
              className="w-4 h-4 m-2"
            />
            peliculas
          </Link>
          <Link
            href={"/"}
            className="uppercase text-white text-sm font-semibold flex items-center"
          >
            {" "}
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685499471/disney-app/icons/tv-old-svgrepo-com_em2esh.svg"
              alt="series"
              width={20}
              height={20}
              className="w-4 h-4 m-2"
            />
            series
          </Link>
        </ul>
      </div>
      <div className="w-1/5 flex justify-end">
        <p className=" text-white flex items-center text-sm mx-4">Felipe</p>
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dishtratk/image/upload/v1685547097/disney-app/icons/scale_g6l2xv.png"
            alt="logoUsuario"
            width={100}
            height={100}
            className="w-12"
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
