"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

const Movies = ({ movies, gender }) => {
  return (
    <div>
      <h2 style={{ color: "red" }}>{gender}</h2>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        centeredSlides={true}
        className="mySwiper"
      >
        {movies
          .filter((movie) => movie.gender.includes(gender))
          .map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <img src={movie.frontImage} alt="kk" />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Movies;