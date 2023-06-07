"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Movies.css";

const Movies = ({ movies, gender }) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: false,
  };

  return (
    <div>
      <h2 style={{ color: "red" }}>{gender}</h2>
      <Slider {...settings}>
        {movies
          .filter((movie) => movie.gender.includes(gender))
          .map((e) => {
            return (
              <Link key={e.id} href={`/movies/${e.id}`} className="p-[10px] w20">
                <Image
                  key={e.id}
                  src={e?.frontImage}
                  width={300}
                  height={300}
                  alt={e.name}
                  className="w-auto h-auto"
                />
              </Link>
            );
          })}
      </Slider>
    </div>
  );
};

export default Movies;